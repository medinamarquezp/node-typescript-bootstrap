import expressPinoLogger from "express-pino-logger";
import { logger } from "@/src/services/logger";

export const loggerMiddleware = expressPinoLogger({
  logger,
  autoLogging: true,
  serializers: {
    req: req => ({
      method: req.method,
      url: req.url
    }),
    res: res => ({
      statusCode: res.statusCode
    })
  }
});
