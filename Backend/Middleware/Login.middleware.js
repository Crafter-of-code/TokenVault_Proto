export function login_middleware(req, res, next) {
  const { username } = req.body;
  //do query in the data (todo)
  const userName = String(username);
  if (userName.includes("@")) {
    console.log(`${userName}: username is valid`);
    next();
  } else {
    res.status(406).send("Not acceptables");
  }
}
