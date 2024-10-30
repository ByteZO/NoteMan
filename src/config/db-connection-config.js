import envConfig from "./config-env.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(envConfig.DB_URI);
    console.log("Data Base connected successfully");
  } catch (error) {
    console.error("somthing went wrong while connecting to Data Base ", error);
  }
};

export default connectDB;
