import { Request, Response } from "express";
import fs from "fs";
import path from "path";
class UserService {
  constructor() {}
  async getUser(req: Request, res: Response) {
    try {
      let data = fs.readFileSync(
        path.join("public/user-post-api/users.json"),
        "utf-8"
      );
      const usersData = JSON.parse(data);
      const userId = req.params.id;
      const userAfterFind = usersData.find((user: any) => user.id == userId);
      if (!userAfterFind) {
        return res.status(404).json("User not found");
      } else {
        res.status(200).json(userAfterFind);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json("Error");
    }
  }

  async getAllUsers(req: Request, res: Response) {
    let data = fs.readFileSync(
      path.join("public/user-post-api/users.json"),
      "utf-8"
    );
    var name = req.query.name;
    const usersData = JSON.parse(data);
    if (name?.length != undefined) {
      var result = usersData.filter((user: any) => {
        return user.name.indexOf(name) !== -1;
      });
      res.status(200).json(result);
    } else {
      res.status(200).json(usersData);
    }
  }
  async postUser(req: Request, res: Response) {}
  async editAdressUser(req: Request, res: Response) {}

  async deleteUser(req: Request, res: Response) {
    const userDbPath = path.join("public/user-post-api/users.json");
    let data = fs.readFileSync(
      path.join("public/user-post-api/users.json"),
      "utf-8"
    );
    const usersData = JSON.parse(data);
    const userId = req.params.id;
    const userAfterFind = usersData.findIndex((user: any) => user.id == userId);
    if (userAfterFind == -1) {
      res.status(404).send("User not found");
    } else {
      usersData.splice(userAfterFind, 1);
      fs.writeFileSync(userDbPath, JSON.stringify(usersData, null, 2));
      res.status(200).json(usersData);
      res.status(200).json(usersData);
    }
  }
}

export default UserService;
