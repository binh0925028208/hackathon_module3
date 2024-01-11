import { Express } from "express";
import userController from "./user.controller";
import postController from "./post.controller";

const Router = (server: Express) => {
  server.use("/user", userController);
  server.use("/api/v1/users/", postController);
};

export default Router;
