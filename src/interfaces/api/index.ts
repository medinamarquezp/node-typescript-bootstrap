import express from "express";
import { errorHandler } from "./handlers/error-handler";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

const api = express();

// App middelwares
api.use(express.json());
api.use(loggerMiddleware);

// Error handler
errorHandler(api);

export default api;