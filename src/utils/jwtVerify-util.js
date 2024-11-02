import jwt from "jsonwebtoken";

const verifyJwt = (token, jwtSecret) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    throw new Error("Invalid token");
  }
};

export default verifyJwt;
