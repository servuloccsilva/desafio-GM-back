// no index.ts:

import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import getPosts from "./endpoints/getPosts";
import deletePosts from "./endpoints/deletePosts";
import createPost from "./endpoints/createPosts";
import createComment from "./endpoints/createComment";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    multipleStatements: true
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/posts", getPosts)
app.post("/posts", createPost)
app.delete("/posts/:id", deletePosts)
app.post("/posts/:id/comment", createComment)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});