import type { NextFunction, Request, Response } from "express";
import { ApplicationError, InternalServerError } from "./errors";
import { logger } from "./logger";

// controller handler (without tryCatch) -> wrapper -> controller handler (with tryCatch)

type ControllerFn = (req: Request, res: Response) => Promise<void>;

export const asyncWrapper =
  (fn: ControllerFn) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res);
    } catch (err) {
      logger.error(err.toString());
      if (err instanceof ApplicationError) {
        next(err);
        return;
      }
      const internalServerError = new InternalServerError();
      next(internalServerError);
    }
  };
