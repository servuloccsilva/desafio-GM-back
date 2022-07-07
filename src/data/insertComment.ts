import { connection } from "..";
import { comentario, posts } from "../types";

export default async function insertComment(comment:comentario):Promise<string>{
    
    await connection("comentarios")
    .insert(comment)
    

    return "Post feito com sucesso"
}