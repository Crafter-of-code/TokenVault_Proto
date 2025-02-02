import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";
import Auth_routes from "./routes/Auth.routes.js";
const app = express();
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.get("/", (req, res) => {
  res.send("<h1>Server is up and running</h1>");
});
// app.post("/login", (req, res) => {
//   const { data } = req.body;
//   if (!data) {
//     console.log("Body is not there");
//     res.send("body is not there");
//   } else {
//     console.log(data);
//     res.send("we found the body");
//   }
// });
app.use(Auth_routes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
