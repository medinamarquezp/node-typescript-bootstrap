import { HttpException } from "./HttpException";
import HttpStatusCode from "./HttpStatusCode";

const httpStatus = HttpStatusCode.NOT_FOUND;
const code = "not-foud";

export class NotFoundException extends HttpException {
    status: number;
    message: string;
    code: string;

    constructor(message: string) {
      super(httpStatus, message, code);
      this.status = httpStatus;
      this.message = message;
      this.code = code;
    }
  }
