/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response, Express } from "express";
import { HttpException } from "@/src/exceptions/HttpException";
import { responseHandler } from "./response-handler";
import { NotFoundException } from "@/src/exceptions/NotFoundException";

export const errorHandler = (api: Express) => {
  api.use("*", () => {
    throw new NotFoundException("Resource not found");
  });

  api.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
    return responseHandler(res, err.status, {
      code: err.code,
      message: err.message
    });
  });
};
