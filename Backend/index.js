import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Server is up and running</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
