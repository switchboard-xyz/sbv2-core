import { Keypair } from "@solana/web3.js";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import * as anchor from "@project-serum/anchor";
import Big from "big.js";
import bs58 from "bs58";
import { ILogProvider, DEFAULT_LOGGER } from "./logging";
import { SwitchboardDecimal } from "@switchboard-xyz/common";

export const toUtf8 = (buf: any): string => {
  buf = buf ?? "";
  return Buffer.from(buf)
    .toString("utf8")
    .replace(/\u0000/g, "");
};

export class FsProvider {
  dataDir: string;

  keypairPath: string;

  logger: ILogProvider;

  constructor(dataDirectory: string, logger: ILogProvider = DEFAULT_LOGGER) {
    this.logger = logger;
    this.dataDir = dataDirectory;
    this.keypairPath = path.join(this.dataDir, ".keypairs");
    fs.mkdirSync(this.keypairPath, { recursive: true });
  }

  // return filepath without extension
  basePath(filePath: string): string {
    const parsedPath = path.parse(
      filePath.startsWith("/") || filePath.startsWith("C:")
        ? filePath
        : path.join(process.cwd(), filePath)
    );
    return path.join(parsedPath.dir, parsedPath.name);
  }

  saveKeypair(keypair: Keypair): void {
    const keypairFullPath = path.join(
      this.keypairPath,
      `${keypair.publicKey}.json`
    );

    this.logger.debug(
      `${chalk.green("saved job keypair to:")} ${keypairFullPath}`
    );
    fs.writeFileSync(keypairFullPath, `[${keypair.secretKey}]`);
  }

  loadKeypair(publicKey: string): Keypair | undefined {
    const keypairFullPath = path.join(this.keypairPath, `${publicKey}.json`);

    if (fs.existsSync(keypairFullPath)) {
      const u8Array = new Uint8Array(
        JSON.parse(fs.readFileSync(keypairFullPath, "utf-8"))
      );

      return Keypair.fromSecretKey(u8Array);
    }
  }

  saveAccount(file: string, account: any): void {
    fs.writeFileSync(file, JSON.stringify(account, undefined, 2));
  }

  jsonReplacers(key: any, value: any) {
    if (typeof value === "string") {
      return value;
    } else if (typeof value === "number") {
      return value;
    } else if (typeof value === "boolean") {
      return value.toString();
    } else {
      if (key === "name" || (key === "metadata" && Array.isArray(value))) {
        return toUtf8(Buffer.from(value));
      } else if (key === "address" && Array.isArray(value)) {
        return bs58.encode(value);
      } else if (value instanceof Big) {
        return value.toString();
      } else if (anchor.BN.isBN(value)) {
        return value.toString(10);
      } else if (
        ("scale" in value && "mantissa" in value) ||
        value instanceof SwitchboardDecimal
      ) {
        return new SwitchboardDecimal(value.mantissa, value.scale)
          .toBig()
          .toString();
      }
    }

    return value;
  }

  save<T, K extends keyof T>(
    baseFileName: string,
    rows?: T | T[],
    headers?: K[]
  ) {
    if (rows) {
      this.saveJson(`${baseFileName}.json`, rows);
    }
    if (rows !== undefined && headers !== undefined) {
      this.saveCsv(`${baseFileName}.csv`, rows, headers);
    }
  }

  saveJson<T>(outputJsonFile: string, rows: T | T[]) {
    if (outputJsonFile) {
      fs.writeFileSync(
        outputJsonFile,
        JSON.stringify(rows, this.jsonReplacers, 2)
      );
    }
  }

  saveCsv<T, K extends keyof T>(
    outputCsvFile: string,
    rows: T | T[],
    headers: K[]
  ) {
    if (outputCsvFile) {
      const grid: string[][] = [];
      grid.push(headers as string[]);
      if (Array.isArray(rows)) {
        rows.forEach((row) => {
          const cols: string[] = [];
          headers.forEach((col) => {
            const val = row[col];
            cols.push(
              typeof val === "string" ? val : this.jsonReplacers(undefined, val)
            );
          });
          grid.push(cols);
        });
      } else {
        const cols: string[] = [];
        headers.forEach((col) => {
          const val = rows[col];
          cols.push(
            typeof val === "string" ? val : this.jsonReplacers(undefined, val)
          );
        });
        grid.push(cols);
      }

      const lines = grid.map((col) => col.join(","));
      fs.writeFileSync(outputCsvFile, lines.join("\n"));
    }
  }

  static getSecret<T>(
    fileSystemPath: string | undefined = "../payer_secrets.json",
    fileParser: (fileString: string) => T
  ): T {
    if (!fileSystemPath || fileSystemPath.length === 0) {
      throw new Error(`Failed to provide a fileSystemPath`);
    }
    if (!fs.existsSync(fileSystemPath)) {
      throw new Error(`fileSystemPath does not exist`);
    }

    const fileString = fs.readFileSync(fileSystemPath, "utf8");
    if (!fileString) {
      throw new Error(`Failed to read fileSystemPath`);
    }

    return fileParser(fileString);
  }
}
