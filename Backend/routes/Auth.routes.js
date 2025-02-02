import { Router } from "express";
import SigninContorller from "../Controllers/Signin.controller.js";
import { sign_middleware } from "../Middleware/signin.middlewares.js";
import { login_middleware } from "../Middleware/login.middleware.js";
import Login_controller from "../Controllers/Login.controller.js";
const Auth_routes = Router();
Auth_routes.post("/signin", sign_middleware, SigninContorller);
Auth_routes.post("/login", login_middleware, Login_controller);
export default Auth_routes;
