import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

const env = process.env.NODE_ENV || "development";
dotenvConfig({ path: resolve(__dirname, `${env}.env`) });

export const app = {
    PORT: Number(process.env.APP_PORT) || 3000,
};