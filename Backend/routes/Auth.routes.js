import { Router } from "express";
import SigninContorller from "../Controllers/Signin.controller.js";
import { sign_middleware } from "../Middleware/signin.middlewares.js";
import {
  Login_post_controller,
  Login_get_controller,
} from "../Controllers/Login.controller.js";
const Auth_routes = Router();
Auth_routes.post("/signin", sign_middleware, SigninContorller);
Auth_routes.post("/login", Login_post_controller);
Auth_routes.get("/login", Login_get_controller);
export default Auth_routes;
