import "dotenv/config";
import { getReasonPhrase } from "http-status-codes";

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const responseBody = {
    success: false,
    message: getReasonPhrase(statusCode),
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  };

  console.error(err);
  res.status(statusCode).send(responseBody);
};
