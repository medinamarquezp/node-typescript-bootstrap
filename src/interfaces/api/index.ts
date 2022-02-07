import express from "express";
import { errorHandler } from "./handlers/error-handler";

const api = express();

// App middelwares
api.use(express.json());

// Error handler
errorHandler(api);

export default api;