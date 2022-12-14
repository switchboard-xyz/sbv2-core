import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { AggregatorAccount } from "@switchboard-xyz/switchboard-v2";
import Big from "big.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

export default class AggregatorSetVarianceThreshold extends BaseCommand {
  static description = "set an aggregator's variance threshold";

  static aliases = ["solana:aggregator:set:variance"];

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
      description: "public key of the aggregator",
    },
    {
      name: "varianceThreshold",
      description:
        "percentage change between a previous accepted result and the next round before an oracle reports a value on-chain. Used to conserve lease cost during low volatility",
    },
  ];

  static examples = [
    "$ sbv2 aggregator:set:varianceThreshold GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 0.1 --keypair ../payer-keypair.json",
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorSetVarianceThreshold);

    const [aggregatorAccount, aggregator] = await this.loadAggregator(
      args.aggregatorKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const transaction = await aggregatorAccount.setConfigTxn({
      // authority,
      batchSize: aggregator.oracleRequestBatchSize,
      minJobResults: aggregator.minJobResults,
      minOracleResults: aggregator.minOracleResults,
      minUpdateDelaySeconds: aggregator.minUpdateDelaySeconds,
      varianceThreshold: Number.parseFloat(args.varianceThreshold),
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
        `${chalk.green(
          `${CHECK_ICON}Aggregator variance threshold set successfully`
        )}`
      );
      this.logger.log(this.toUrl(txn));
    }
  }

  async catch(error) {
    super.catch(error, "failed to set aggregator's variance threshold");
  }
}
