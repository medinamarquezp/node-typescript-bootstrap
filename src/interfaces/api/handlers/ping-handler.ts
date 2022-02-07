import HttpStatusCode from "@/src/exceptions/HttpStatusCode";
import { Express, Request, Response } from "express";
import { responseHandler } from "../handlers/response-handler";

export const pingHandler = (api: Express) => {
  api.get("/", (req: Request, res: Response) => {
    return responseHandler(res, HttpStatusCode.OK, {
        message: "API is up and running"
      });
  });
};
