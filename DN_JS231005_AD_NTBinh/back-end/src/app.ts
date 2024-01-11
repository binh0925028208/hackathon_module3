import express, {
  NextFunction,
  Request,
  Response,
  request,
  urlencoded,
} from "express";
import * as fs from "fs";
import * as path from "path";
import cors from "cors";
import Router from "./controllers";

const server = express();
const PORT = 8000;

server.use(express.static("public"));
server.use(urlencoded());
server.use(cors());

Router(server);

server.listen(PORT, () => {
  console.log(`server listen on port 8000, http://localhost:${PORT}`);
});
