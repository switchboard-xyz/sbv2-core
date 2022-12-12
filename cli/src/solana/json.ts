function parseString(
  obj: Record<string, any>,
  key: string,
  defaultString: string | undefined = ""
): string {
  if (key in obj) {
    switch (typeof obj[key]) {
      case "string":
        return obj[key];
      default:
        String(obj[key]);
    }
  }

  return defaultString;
}

function parseNumber(
  obj: Record<string, any>,
  key: string,
  defaultNumber: number | undefined = 0
): number {
  if (key in obj) {
    switch (typeof obj[key]) {
      case "number":
        return obj[key];
      default:
        Number(obj[key]);
    }
  }

  return defaultNumber;
}

function parseBoolean(
  obj: Record<string, any>,
  key: string,
  defaultBoolean: boolean | undefined = false
): boolean {
  if (key in obj) {
    switch (typeof obj[key]) {
      case "boolean":
        return obj[key];
      default:
        return Boolean(obj[key]);
    }
  }

  return defaultBoolean;
}

export class QueueJson {
  // params
  name: string;
  metadata: string;
  reward: number;
  minStake: number;
  feedProbationPeriod: number;
  oracleTimeout: number;
  slashingEnabled: boolean;
  varianceToleranceMultiplier: number;
  consecutiveFeedFailureLimit: number;
  consecutiveOracleFailureLimit: number;
  queueSize: number;
  unpermissionedFeeds: boolean;
  unpermissionedVrf: boolean;
  enableBufferRelayers: boolean;

  // accounts
  authority?: string;
  keypair?: string;
  dataBuffer?: string;

  // resources
  cranks: Array<CrankJson>;
  oracles: Array<OracleJson>;

  // TODO: Add Aggregator array

  constructor(obj: Record<string, any>) {
    this.name = parseString(obj, "name", "");
    this.metadata = parseString(obj, "metadata", "");
    this.reward = parseNumber(obj, "reward", 0);
    this.minStake = parseNumber(obj, "minStake", 0);
    this.feedProbationPeriod = parseNumber(obj, "feedProbationPeriod", 1000);
    this.oracleTimeout = parseNumber(obj, "oracleTimeout", 180);
    this.slashingEnabled = parseBoolean(obj, "slashingEnabled", false);
    this.varianceToleranceMultiplier = parseNumber(
      obj,
      "varianceToleranceMultiplier",
      2
    );
    this.consecutiveFeedFailureLimit = parseNumber(
      obj,
      "consecutiveFeedFailureLimit",
      1000
    );
    this.consecutiveOracleFailureLimit = parseNumber(
      obj,
      "consecutiveOracleFailureLimit",
      1000
    );
    this.queueSize = parseNumber(obj, "queueSize", 100);
    this.unpermissionedFeeds = parseBoolean(obj, "unpermissionedFeeds", false);
    this.unpermissionedVrf = parseBoolean(obj, "unpermissionedVrf", false);
    this.enableBufferRelayers = parseBoolean(
      obj,
      "enableBufferRelayers",
      false
    );

    this.authority = parseString(obj, "authorityKeypair", undefined);
    this.keypair = parseString(obj, "keypair", undefined);
    this.dataBuffer = parseString(obj, "dataBufferKeypair", undefined);

    // load cranks
    this.cranks = CrankJson.loadMultiple(obj);
    this.oracles = OracleJson.loadMultiple(obj);
  }
}

export class CrankJson {
  // params
  name: string;
  metadata: string;
  maxRows: number;

  // accounts
  keypair?: string;
  dataBuffer?: string;

  constructor(obj: Record<string, any>) {
    this.name = parseString(obj, "name", "");
    this.metadata = parseString(obj, "metadata", "");
    this.maxRows = parseNumber(obj, "maxRows", 100);
    this.keypair = parseString(obj, "keypair", undefined);
    this.dataBuffer = parseString(obj, "dataBufferKeypair", undefined);
  }

  static loadMultiple(obj: Record<string, any>): Array<CrankJson> {
    const crankJsons: Array<CrankJson> = [];
    if ("cranks" in obj && Array.isArray(obj.cranks)) {
      for (const crank of obj.cranks) {
        if ("maxRows" in crank) {
          crankJsons.push(new CrankJson(crank));
        }
      }
    }
    return crankJsons;
  }
}

export class OracleJson {
  // params
  name: string;
  metadata: string;
  stakeAmount: number;

  // accounts
  authority?: string;
  stakingWallet?: string;

  constructor(obj: Record<string, any>) {
    this.name = parseString(obj, "name", "");
    this.metadata = parseString(obj, "metadata", "");
    this.stakeAmount = parseNumber(obj, "stakeAmount", 0);

    this.authority = parseString(obj, "authority", undefined);
    this.stakingWallet = parseString(obj, "stakingWallet", undefined);
  }

  static loadMultiple(obj: Record<string, any>): Array<OracleJson> {
    const oracleJsons: Array<OracleJson> = [];
    if ("oracles" in obj && Array.isArray(obj.oracles)) {
      for (const oracle of obj.oracles) {
        oracleJsons.push(new OracleJson(oracle));
      }
    }
    return oracleJsons;
  }
}
