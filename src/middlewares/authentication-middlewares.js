import envConfig from "../config/config-env.js";
import User from "../models/user-model.js";
import verifyJwt from "../utils/jwtVerify-util.js";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1] || req.cookies.token;
 

  try {
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "Access denied. No token provided.",
      });
    }

    const decodedJwt = verifyJwt(token, envConfig.JWT_SECRET);

    const user = await User.findById(decodedJwt.id).select("-password");

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found. Unauthorized access.",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("authMiddleware Error:", error);
    return res.status(401).json({
      status: 401,
      message: "Invalid or expired token.",
    });
  }
};

export default authMiddleware;
