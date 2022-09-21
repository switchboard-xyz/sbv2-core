import { Flags } from "@oclif/core";
import {
  Keypair,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { OracleJob } from "@switchboard-xyz/common";
import { prettyPrintJob } from "@switchboard-xyz/sbv2-utils";
import {
  JobAccount,
  packInstructions,
  ProgramStateAccount,
  programWallet,
  sendAll,
} from "@switchboard-xyz/switchboard-v2";
import { BN } from "bn.js";
import fs from "fs";
import path from "path";
import {
  packAndSend,
  SolanaWithSignerBaseCommand as BaseCommand,
} from "../../../../solana";

export default class JobCreate extends BaseCommand {
  static description = "create a job account";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that will be the account authority",
    }),
    name: Flags.string({
      char: "n",
      description: "name of the buffer account",
    }),
  };

  static args = [
    {
      name: "jobDefinition",
      required: true,
      description: "filesystem path to job definition",
    },
  ];

  async run() {
    const { args, flags } = await this.parse(JobCreate);
    const payerKeypair = this.signer;
    const authority = await this.loadAuthority(flags.authority);

    const jobDefinitionPath = args.jobDefinition.startsWith("/")
      ? args.jobDefinition
      : path.join(process.cwd(), args.jobDefinition);
    if (!fs.existsSync(jobDefinitionPath)) {
      throw new Error(`jobDefinitionPath does not exist, ${jobDefinitionPath}`);
    }

    const oracleJob = OracleJob.fromObject(
      JSON.parse(
        fs
          .readFileSync(jobDefinitionPath, "utf-8")
          .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g, "")
      )
    );
    // const jobAccount = await JobAccount.create(this.program, {
    //   authority: authority.publicKey,
    //   name: flags.name ? Buffer.from(flags.name) : Buffer.from(""),
    //   data: Buffer.from(OracleJob.encodeDelimited(oracleJob).finish()),
    // });

    const program = this.program;
    const params = {
      authority: authority.publicKey,
      name: flags.name ? Buffer.from(flags.name) : Buffer.from(""),
      data: Buffer.from(OracleJob.encodeDelimited(oracleJob).finish()),
      keypair: Keypair.generate(),
    };

    console.log(params.data.byteLength);

    const CHUNK_SIZE = 800;
    const [stateAccount, stateBump] = await ProgramStateAccount.getOrCreate(
      program,
      {}
    );
    const state = await stateAccount.loadData();

    if (params.data.byteLength <= CHUNK_SIZE) {
      await program.methods
        .jobInit({
          name: params.name ?? Buffer.from(""),
          expiration: new BN(0),
          stateBump,
          data: params.data,
          size: params.data.byteLength,
        })
        .accounts({
          job: params.keypair.publicKey,
          authority: params.authority,
          programState: stateAccount.publicKey,
          payer: payerKeypair.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([params.keypair])
        .rpc();
    } else {
      const chunks: Buffer[] = [];
      for (let i = 0; i < params.data.byteLength; ) {
        const end =
          i + CHUNK_SIZE >= params.data.byteLength
            ? params.data.byteLength
            : i + CHUNK_SIZE;
        chunks.push(params.data.slice(i, end));
        i = end;
      }

      const ixns: TransactionInstruction[] = [];

      // const txns: string[] = [];

      ixns.push(
        await program.methods
          .jobInit({
            name: [],
            expiration: new BN(0),
            stateBump,
            data: Buffer.from(""),
            size: params.data.byteLength,
          })
          .accounts({
            job: params.keypair.publicKey,
            authority: payerKeypair.publicKey,
            programState: stateAccount.publicKey,
            payer: payerKeypair.publicKey,
            systemProgram: SystemProgram.programId,
          })
          .signers([params.keypair])
          .instruction()
      );

      for await (const [n, chunk] of chunks.entries()) {
        console.log(chunk.byteLength);
        ixns.push(
          await program.methods
            .jobSetData({
              data: chunk.slice(0, 800),
              size: params.data.byteLength,
              chunkIdx: n,
            })
            .accounts({
              job: params.keypair.publicKey,
              authority: payerKeypair.publicKey,
            })
            .instruction()
        );
      }

      console.log(`Ixn Length: ${ixns.length}`);

      const { blockhash } =
        await program.provider.connection.getLatestBlockhash();

      const packed = packInstructions(ixns, payerKeypair.publicKey, blockhash);

      console.log(`Packed Length: ${packed.length}`);

      console.log(
        `Packed Ixn ${packed.reduce(
          (prev, curr) => prev + curr.instructions.length,
          0
        )}`
      );

      // const sigs = await sendAll(
      //   program.provider,
      //   packed.map((tx) => {
      //     return { tx };
      //   }),
      //   [params.keypair],
      //   false
      // );

      const sigs = await sendAll(
        program.provider,
        ixns.map((ixn) => {
          return {
            tx: new Transaction({
              recentBlockhash: blockhash,
              feePayer: payerKeypair.publicKey,
            }).add(ixn),
          };
        }),
        [params.keypair],
        false
      );

      // const sigs = await packAndSend(
      //   program,
      //   ixns,
      //   [],
      //   [payerKeypair, params.keypair],
      //   payerKeypair.publicKey
      // );
    }

    if (this.silent) {
      this.logger.info(params.keypair.publicKey.toString());
      return;
    }

    const jobAccount = new JobAccount({
      program,
      publicKey: params.keypair.publicKey,
    });

    const jobData = await jobAccount.loadData();
    this.logger.info(await prettyPrintJob(jobAccount, jobData));
  }

  async catch(error) {
    super.catch(error, "failed to create job account");
  }
}
