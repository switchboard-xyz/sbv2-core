| Field                 | Type                                                      | Description                                                                                                                                |
| --------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| addr                  | HexString                                                 | Address of the aggregator resource.                                                                                                        |
| name                  | u8[]                                                      | Name of the aggregator to store on-chain.                                                                                                  |
| metadata              | u8[]                                                      | Metadata of the aggregator to store on-chain.                                                                                              |
| queueAddr             | HexString                                                 | Address of the oracle queue that the resource belongs to.                                                                                  |
| crankAddr             | HexString                                                 | Optional, address of the crank that will periodically trigger `AggregatorOpenRound` calls to request an update from a batch of oracles.    |
| batchSize             | u64                                                       | Number of oracles assigned to an update request.                                                                                           |
| minOracleResults      | u64                                                       | Minimum number of oracle responses required before a round is validated.                                                                   |
| minJobResults         | u64                                                       | Minimum number of job results before an oracle accepts a result.                                                                           |
| minUpdateDelaySeconds | u64                                                       | Minimum number of seconds required between aggregator rounds.                                                                              |
| startAfter            | u64                                                       | Unix timestamp when open round calls will be considered valid.                                                                             |
| varianceThreshold     | [SwitchboardDecimal](/aptos/idl/types/SwitchboardDecimal) | Change percentage required between a previous round and the current round. If variance percentage is not met, reject new oracle responses. |
| forceReportPeriod     | u64                                                       | Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.                              |
| expiration            | u64                                                       | Timestamp when the feed is no longer needed.                                                                                               |
| disableCrank          | bool                                                      | Flag dictating whether pushing to a crank is disabled.                                                                                     |
| historyLimit          | u64                                                       | The maximum number of historical samples that will be stored with the aggregator before being overwritten in a round-robin fashion.        |
| readCharge            | u64                                                       | The cost to read a data feed.                                                                                                              |
| rewardEscrow          | HexString                                                 | The account address that will receive any funds incurred from setting a `readCharge`.                                                      |
| readWhitelist         | HexString[]                                               | Optional, account addresses permitted to read a data feed.                                                                                 |
| limitReadsToWhitelist | bool                                                      | Flag dictating whether a feed permits public reads.                                                                                        |
| authority             | HexString                                                 | The account delegated as the authority for making changes.                                                                                 |