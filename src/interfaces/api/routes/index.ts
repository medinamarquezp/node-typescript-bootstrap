import { Express } from "express";
import { errorHandler } from "../handlers/error-handler";
import { pingHandler } from "../handlers/ping-handler";

export const routes = (api: Express): Express => {
    pingHandler(api);
    errorHandler(api);
    return api;
};