import { secretKey } from "../helpers/jwt.js";
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  //check if the user is authenticated
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return res.status(403).send("Authorization header required");
  }

  //clean token
  let token = req.headers.authorization.split(" ")[1];

  try {
    let payload = jwt.verify(token, secretKey);
    req.user = payload;
  } catch {
    return res.status(401).send("Session has expired");
  }

  next();
};

export default {
  auth,
};
