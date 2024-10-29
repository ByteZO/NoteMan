// All imports are defined here
import express from "express";
import authRoutes from "./routes/auth-route.js";

// All the routes are defined here
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Note Man running YOYO !!!");
});

app.use("/api/auth", authRoutes);

// listen to the port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
