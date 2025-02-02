import bcrypt, { hash } from "bcrypt";
export default async function SigninContorller(req, res) {
  const { user_name, pass_word } = req.body;
  const username = String(user_name);
  const password = String(pass_word);
  await bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      console.log(hash);
      // base query here
    });
  });
  res.cookie("mail", `${username}`);
}
