import User from "../models/user-model.js";
import passwordHash from "../utils/passwordHash-util.js";
import passwordChecker from "../utils/passwordChecker-util.js";
import jwtGenerator from "../utils/jwtokenGenerator-util.js";
import envConfig from "../config/config-env.js";
const register = async (req, res) => {
  try {
    const { userName, fullName, email, phoneNumber, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User exists",
        status: 409,
      });
    }

    const hashedPassword = await passwordHash(password);

    const newUser = await User.create({
      userName,
      name: fullName,
      email,
      password: hashedPassword,
      phone: phoneNumber,
    });

    const { password: _, ...userData } = newUser.toObject();

    console.log(userData);

    return res.status(201).json({
      message: "Success",
      status: 201,
      data: userData,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      message: "Something went wrong while creating the user!",
      status: 500,
    });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      res.status(404).json({
        message: "User not found",
        status: 404,
      });

    const passwordIsCorrect = await passwordChecker(password, user.password);
    if (!passwordIsCorrect)
      res.status(401).json({
        message: "Wrong Password !",
        status: 401,
      });

    const jwToken = jwtGenerator(user.email, user._id, envConfig.JWT_SECRET);
    const { password: _, ...userData } = user.toObject();
    res
      .status(200)
      .set("Authorization", `Bearer ${jwToken}`)
      .json({
        message: "Success",
        status: 200,
        data: {
          ...userData,
        },
      });
  } catch (error) {
    res.json({
      message: "Error",
      status: 500,
    });
  }
};

export { register, logIn };
