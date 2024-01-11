import express from "express";
import UserService from "../services/user.services";

const userController = express.Router();
const userService = new UserService();
userController.get("/", userService.getAllUsers);
userController.post("/", userService.postUser);
userController.patch("/:id", userService.editAdressUser);
userController.get("/:id", userService.getUser);
userController.delete("/:id", userService.deleteUser);

export default userController;
