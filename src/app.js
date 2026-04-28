import express from "express";
import userRouter from "./routers/userRouter.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to API" });
});

userRouter(app);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});