import jwt from "jsonwebtoken";

export const secretKey = process.env.JWT_SECRET_KEY;

export const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: "10d" });
};
