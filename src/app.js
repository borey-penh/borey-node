import express from "express";
import userRouter from "./routers/userRouter.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log("   Body:", req.body);
  }
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ success: false, message: err.message });
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to API" });
});

userRouter(app);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});