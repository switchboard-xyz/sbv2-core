import { Flags } from "@oclif/core";
import { Keypair, PublicKey } from "@solana/web3.js";
import {
  CrankInitParams,
  OracleInitParams,
  OracleStakeParams,
  PermissionSetParams,
  QueueAccount,
} from "@switchboard-xyz/solana.js";
import {
  QueueJson,
  SolanaWithSignerBaseCommand as BaseCommand,
} from "../../../solana";
import { CHECK_ICON } from "../../../utils";
import chalk from "chalk";
import fs from "fs";

export default class NetworkCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create an oracle queue";

  static flags = {
    ...BaseCommand.flags,
    inputFile: Flags.string({
      description: "",
      required: true,
    }),
    // queue flags
    // authority: Flags.string({
    //   char: "a",
    //   description:
    //     "alternate keypair that is the authority for the queue and is required to approve permissions",
    // }),
    // queueKeypair: Flags.string({
    //   description:
    //     "keypair to use for the oracle queue account. This will be the account's publicKey",
    // }),
    // dataBufferKeypair: Flags.string({
    //   description: "keypair to use for the oracle queue data buffer account.",
    // }),
    // size: Flags.integer({
    //   description: "set the size of the queue",
    //   default: 100,
    // }),
  };

  async run() {
    const { flags } = await this.parse(NetworkCreate);

    const inputFile = this.normalizePath(flags.inputFile);
    const json: QueueJson = new QueueJson(
      JSON.parse(fs.readFileSync(inputFile, "utf8"))
    );

    // console.log(JSON.stringify(json, undefined, 2));

    let queueKeypair: Keypair;
    if (json.keypair) {
      queueKeypair = await this.loadKeypair(json.keypair);
    } else {
      queueKeypair = Keypair.generate();
      // TODO: Save the keypair?
    }

    let dataBufferKeypair: Keypair;
    if (json.dataBuffer) {
      dataBufferKeypair = await this.loadKeypair(json.dataBuffer);
    } else {
      dataBufferKeypair = Keypair.generate();
      // TODO: Save the keypair?
    }

    let authority: Keypair | undefined = undefined;
    if (json.authority) {
      authority = await this.loadKeypair(json.authority);
    }

    const cranks: Array<Omit<CrankInitParams, "queueAccount">> = [];
    for (const crank of json.cranks) {
      let crankKeypair: Keypair;
      if (crank.keypair) {
        crankKeypair = await this.loadKeypair(crank.keypair);
      } else {
        crankKeypair = Keypair.generate();
        // TODO: Save the keypair?
      }

      let crankDataBufferKeypair: Keypair;
      if (crank.dataBuffer) {
        crankDataBufferKeypair = await this.loadKeypair(crank.dataBuffer);
      } else {
        crankDataBufferKeypair = Keypair.generate();
        // TODO: Save the keypair?
      }

      cranks.push({
        ...crank,
        keypair: crankKeypair,
        dataBufferKeypair: crankDataBufferKeypair,
      });
    }

    const oracles: Array<
      OracleInitParams &
        OracleStakeParams &
        Partial<PermissionSetParams> & {
          queueAuthorityPubkey?: PublicKey;
        }
    > = [];
    for (const oracle of json.oracles) {
      let authority: Keypair | undefined = undefined;
      if (oracle.authority) {
        authority = await this.loadKeypair(oracle.authority);
      }

      let stakingWalletKeypair: Keypair;
      if (oracle.stakingWallet) {
        stakingWalletKeypair = await this.loadKeypair(oracle.stakingWallet);
      } else {
        stakingWalletKeypair = Keypair.generate();
        // TODO: Save the keypair?
      }

      oracles.push({
        ...oracle,
        authority: authority,
        stakingWalletKeypair: stakingWalletKeypair,
      });
    }

    const [txns, network] = await this.program.createNetworkInstructions(
      this.payer,
      {
        name: json.name,
        metadata: json.metadata,
        reward: json.reward,
        minStake: json.minStake,
        feedProbationPeriod: json.feedProbationPeriod,
        oracleTimeout: json.oracleTimeout,
        slashingEnabled: json.slashingEnabled,
        consecutiveFeedFailureLimit: json.consecutiveFeedFailureLimit,
        consecutiveOracleFailureLimit: json.consecutiveOracleFailureLimit,
        queueSize: json.queueSize,
        unpermissionedFeeds: json.unpermissionedFeeds,
        unpermissionedVrf: json.unpermissionedVrf,
        enableBufferRelayers: json.enableBufferRelayers,
        keypair: queueKeypair,
        dataBufferKeypair: dataBufferKeypair,
        authority: authority ? authority.publicKey : undefined,
        cranks,
        oracles,
      }
    );
    const signature = await this.signAndSendAll(txns);

    this.log(
      `${chalk.green(CHECK_ICON, "successfully created an oracle queue")} - ${
        network.queueAccount.publicKey
      }`
    );
    for (const crank of network.cranks) {
      this.log(
        `${chalk.green(CHECK_ICON, "successfully created a crank")} - ${
          crank.publicKey
        }`
      );
    }
    for (const oracle of network.oracles) {
      this.log(
        `${chalk.green(CHECK_ICON, "successfully created an oracle")} - ${
          oracle.account.publicKey
        }`
      );
    }

    // if (flags.json) {
    //   const accounts = await queueAccount.toAccountsJSON();
    //   return this.normalizeAccountData(queueAccount.publicKey, accounts);
    // }

    // if (this.silent) {
    //   this.log(signature);
    //   return;
    // }

    // // handle nicer logging here
    // this.log(
    //   `${chalk.green(CHECK_ICON, "successfully created an oracle queue")} - ${
    //     queueAccount.publicKey
    //   }`
    // );

    // this.log("Transaction Signature:", this.toUrl(signature));
  }

  async catch(error) {
    super.catch(error, "Failed to create a switchboard network");
  }
}
