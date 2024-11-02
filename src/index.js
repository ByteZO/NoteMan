// All imports are defined here
import express from "express";

import authRoutes from "./routes/auth-route.js";
import profileRoutes from "./routes/owner-route.js";
import connectDB from "./config/db-connection-config.js";
import envConfig from "./config/config-env.js";

// All the routes are defined here
const app = express();

app.get("/", (req, res) => {
  res.send("Note Man running YOYO !!!");
});
connectDB();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/owner", profileRoutes);
// listen to the port 3000
app.listen(envConfig.PORT, () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});
