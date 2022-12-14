import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { AggregatorAccount } from "@switchboard-xyz/switchboard-v2";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

export default class AggregatorSetBatchSize extends BaseCommand {
  static description = "set an aggregator's batch size";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account",
    },
    {
      name: "batchSize",
      required: true,
      description: "number of oracles requested for each open round call",
    },
  ];

  //   static examples = ["$ sbv2 aggregator:set:authority"];

  async run() {
    const { args, flags } = await this.parse(AggregatorSetBatchSize);

    const batchSize = Number.parseInt(args.batchSize, 10);
    if (batchSize <= 0 || batchSize > 16) {
      throw new Error(`Invalid batch size (1 - 16), ${batchSize}`);
    }

    const [aggregatorAccount, aggregator] = await this.loadAggregator(
      args.aggregatorKey
    );

    if (aggregator.minOracleResults > batchSize) {
      throw new Error(
        `Batch size ${batchSize} must be greater than minOracleResults ${aggregator.minOracleResults}`
      );
    }

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const transaction = await aggregatorAccount.setConfigTxn({
      // authority,
      batchSize,
      minJobResults: aggregator.minJobResults,
      minOracleResults: aggregator.minOracleResults,
      minUpdateDelaySeconds: aggregator.minUpdateDelaySeconds,
    });
    const txn = (
      await this.program.provider.sendAll([
        {
          tx: transaction,
          signers: [authority],
        },
      ])
    )[0];

    if (this.silent) {
      console.log(txn);
    } else {
      this.logger.log(
        `${chalk.green(`${CHECK_ICON}Aggregator batch size set successfully`)}`
      );
      this.logger.log(this.toUrl(txn));
    }
  }

  async catch(error) {
    super.catch(error, "failed to set aggregator batch size");
  }
}
