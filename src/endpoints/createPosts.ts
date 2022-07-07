import { Request, Response } from "express";
import insertPosts from "../data/insertPosts";
import { posts, postsInput } from "../types";

export default async function createPost(req:Request, res:Response){
    try {
        const {mensagem}:postsInput = req.body

        if(!mensagem){
            throw new Error ("O campo de mensagem deve ser preenchido")
        }

        const postsInsert:posts = {
            id: Date.now().toString(),
            mensagem
        }

        const answer = await insertPosts(postsInsert)

        res.status(201).send({message:answer})
        
    } catch (error:any) {
        res.status(500).send({message:error.message})
        
    }
}   