import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {
  AggregatorAccount,
  CrankAccount,
  QueueAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { AggregatorIllegalRoundOpenCall } from "../../../types";
import { CHECK_ICON } from "../../../utils";

export default class AggregatorTransfer extends BaseCommand {
  static description = "transfer an aggregator to a new queue";

  // static examples = [
  //   "$ sbv2 solana aggregator update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json",
  // ];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
    newQueue: Flags.string({
      required: true,
      description: "publicKey of the new queue to transfer to",
    }),
    newCrank: Flags.string({
      description: "publicKey of the crank to transfer to",
    }),
    loadAmount: Flags.string({
      description: "amount of funds to load into the new lease",
    }),
    enable: Flags.boolean({
      description: "enable permissions on the new queue",
    }),
    queueAuthority: Flags.string({
      description: "alternate keypair that is the authority for the queue",
    }),
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account to transfer",
      require: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorTransfer);

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const [newQueueAccount, newQueue] = await QueueAccount.load(
      this.program,
      flags.newQueue
    );

    const queueAuthority =
      flags.enable && flags.queueAuthority
        ? await this.loadAuthority(flags.queueAuthority, newQueue.authority)
        : undefined;

    const [transferTxns] = await aggregatorAccount.transferQueueInstructions(
      this.payer,
      {
        newQueue: newQueueAccount,
        authority,
        queueAuthority,
        enable: flags.enable ?? false,
        newCrank: flags.newCrank
          ? new CrankAccount(this.program, new PublicKey(flags.newCrank))
          : undefined,
        fundAmount: flags.loadAmount
          ? Number.parseFloat(flags.loadAmount)
          : undefined,
      }
    );

    const signatures = await this.signAndSendAll(transferTxns);

    if (this.silent) {
      this.log(signatures.join("\n"));
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Aggregator transfer to new queue successfully`
      )}`
    );

    signatures.map((signature) => this.logger.info(this.toUrl(signature)));
  }

  async catch(error) {
    if (
      error instanceof AggregatorIllegalRoundOpenCall ||
      error.toString().includes("0x177d")
    ) {
      this.logger.info(error.toString());
      this.exit(0);
    }

    super.catch(error, "failed to transfer aggregator to new queue");
  }
}
