export function sign_middleware(req, res, next) {
  const { user_name, pass_word } = req.body;
  // console.log(user_name, pass_word);
  const username = String(user_name);
  if (username.includes("@")) {
    console.log("this user's email address has been varified");
    next();
  } else {
    res.status(406).send("Not acceptables");
  }
}
