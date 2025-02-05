import jwt from "jsonwebtoken";
async function Login_get_controller(req, res) {
  const { data } = await req.body;
  res.cookie("username", "login_cookie-seted");
  res.send(`The data is ${data}`);
}
async function Login_post_controller(req, res) {
  const { username } = await req.body;
  let jwt_secret_key =
    "c0a1e73d4c8d989c2a92e278903c26ff89a60ce418bce8f728bd74284623cbf18205ea234314ee801b894b9fab201fb8c3137327eea2652cdcf107f605c4f1fb";
  // check data base base in the query
  // jwt.sign(String(username,jwt_secret_key,Algorith));
  const auth_token = jwt.sign({ username }, jwt_secret_key, {
    expiresIn: "1h",
  });
  console.log(auth_token);
  res.cookie("auth_token", auth_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    path: "/",
  });
  // console.log("cookie_sended");
  res.send(auth_token);
}
export { Login_post_controller, Login_get_controller };
