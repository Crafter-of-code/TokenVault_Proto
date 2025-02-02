import jwt from "jsonwebtoken";
export default async function Login_controller(req, res) {
  const { username } = req.body;
  let jwt_secret_key =
    "c0a1e73d4c8d989c2a92e278903c26ff89a60ce418bce8f728bd74284623cbf18205ea234314ee801b894b9fab201fb8c3137327eea2652cdcf107f605c4f1fb";
  // check data base base in the query
  // jwt.sign(String(username,jwt_secret_key,Algorith));
  const token = jwt.sign(String(username), jwt_secret_key);
  console.log(token);
  res.cookie("email", token);
}
