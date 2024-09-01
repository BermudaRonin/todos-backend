
import { Router } from "express";
import { UserController, UserMiddleware } from "./controllers/user.controller.js";


const users = Router();

users.post("/register", UserController.register);
users.post("/login", UserController.login);
users.get("/me", UserMiddleware.getCurerntUser, UserController.getCurrentUser);

// const todos = Router();
// const lists = Router();


const version = Router();

version.get("/", (req, res) => res.send("API V1 👍"));
version.use("/users", users);
// version.use("/todos", todos);
// version.use("/lists", lists);

export default version;


