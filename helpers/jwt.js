import jwt from "jsonwebtoken";
import "dotenv/config";

export const secretKey = process.env.JWT_SECRET_KEY;

export const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: "10d" });
};
