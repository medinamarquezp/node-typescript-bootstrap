import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

const dev = "development";
const prod = "production";
const rootPath = process.cwd();
const env = process.env.NODE_ENV || dev;

dotenvConfig({ path: resolve(__dirname, `${env}.env`) });

export const app = {
    ENV: env,
    IS_DEV: env === dev,
    IS_PROD: env === prod,
    PORT: Number(process.env.APP_PORT) || 5000,
    LOGS_PATH: `${rootPath}/${process.env.APP_LOGS_PATH || "logs"}`,
    LOG_LEVEL: process.env.APP_LOGS_LEVEL || "info"
};