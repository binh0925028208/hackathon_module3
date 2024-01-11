import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import QueryString from "qs";
class PostService {
  constructor() {}
  async getPost(req: Request, res: Response) {
    try {
      let data = fs.readFileSync(
        path.join("public/user-post-api/posts.json"),
        "utf-8"
      );
      const postsData = JSON.parse(data);
      const postId = req.params.id;
      console.log(postsData);
      const postAfterFind = postsData.filter((post: any) => {
        return post.userId == postId;
      });
      res.status(200).json(postAfterFind);
    } catch (error) {
      console.error(error);
      res.status(500).json("Error");
    }
  }
}

export default PostService;
