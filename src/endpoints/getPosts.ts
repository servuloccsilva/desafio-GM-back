import { Request, Response } from "express";
import selectAllPosts from "../data/selectAllPosts";

export default async function getPosts(req:Request, res:Response){
    try {
        
        const allPosts = await selectAllPosts()

        if(!allPosts?.length){
            throw new Error ("Não há nenhum Post")
        }

        res.status(200).send(allPosts)
    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}

