import express from "express";
import PostService from "../services/post.services";

const postController = express.Router();
const postService = new PostService();
postController.get("/:id", postService.getPost);

export default postController;
