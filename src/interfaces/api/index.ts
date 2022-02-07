import express from "express";
import { routes } from "./routes";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

let api = express();

// App middelwares
api.use(express.json());
api.use(loggerMiddleware);

// Routes
api = routes(api);

export default api;