import pino from "pino";
import { app } from "@/src/config";

const consoleTransport = {
  target: "pino-pretty",
  options: {
    colorize: true,
    levelFirst: true,
    translateTime: "yyyy-dd-mm, h:MM:ss TT"
  }
};

const fileTransport = {
    target: "pino/file",
    options: {
      destination: `${app.LOGS_PATH}/app.log`,
      mkdir: true
    }
};

export const logger = pino(
  {
    enabled: app.IS_DEV || app.IS_PROD,
    level: app.LOG_LEVEL,
    transport: app.IS_PROD ? fileTransport : consoleTransport
  }
);
