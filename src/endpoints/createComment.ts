import { Request, Response } from "express";
import insertComment from "../data/insertComment";
import insertPosts from "../data/insertPosts";
import { comentario, comentarioInput, } from "../types";

export default async function createComment(req:Request, res:Response){
    try {
        const {comentario:text}:comentarioInput = req.body
        const {id} = req.params

        if(!text){
            throw new Error ("O campo de mensagem deve ser preenchido")
        }

        const commentInsert:comentario = {
            id: Date.now().toString(),
            comentario:text,
            id_postagem:id
        }

        const answer = await insertComment(commentInsert)

        res.status(201).send({message:answer})
        
    } catch (error:any) {
        res.status(500).send({message:error.message})
        
    }
}   