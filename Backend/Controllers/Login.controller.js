import jwt from "jsonwebtoken";
async function Login_get_controller(req, res) {
  const { data } = await req.body;
  res.cookie("username", "login_cookie-seted");
  res.send(`The data is ${data}`);
}
async function Login_post_controller(req, res) {
  const { username } = await req.body;

  // check data base base in the query
  // jwt.sign(String(username,jwt_secret_key,Algorith));
  const auth_token = jwt.sign({ username }, jwt_secret_key, {
    expiresIn: "1h",
  });
  res.cookie("auth_token", auth_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    path: "/",
  });
  // res.send(auth_token);
}
export { Login_post_controller, Login_get_controller };
