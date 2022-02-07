/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatusCode from "@/src/exceptions/HttpStatusCode";
import { Response } from "express";

export const responseHandler = (
    response: Response,
    status: number,
    data: any
  ): Response => {

  const contentProperty = status >= HttpStatusCode.BAD_REQUEST ? "error" : "data";
  return response.status(status).json({
    timestamp: new Date(),
    status,
    [contentProperty]: data
  });
};
