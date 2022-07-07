import { Request, Response } from "express";
import { connection } from "..";
import deletePostById from "../data/deletePostById";
import selectPostById from "../data/selectPostById";

export default async function deletePosts(req:Request, res:Response):Promise<void>{
    try {
        const { id } = req.params

        const checkPost = await selectPostById(id)

        if(!checkPost){
            throw new Error ("Esse Id não existe")
        }

        await deletePostById(id)

        res.status(200).send("Detelado com sucesso")

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message });
        } else {
            res.status(res.statusCode).send({ message: error.sqlMessage || error.message });
        }

    }
}

//  await connection()
//             .delete()
//             .from("postagem")
//             .where({ id })