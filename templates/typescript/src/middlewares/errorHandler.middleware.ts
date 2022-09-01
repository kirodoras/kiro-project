import { NextFunction, Request, Response } from "express";

export function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);

  if (error.type === "conflict") {
    return res.sendStatus(409);
  }
  if (error.type === "not_found") {
    return res.sendStatus(404);
  }
  if (error.type === "unauthorized") return res.sendStatus(401);

  res.sendStatus(500);
}
