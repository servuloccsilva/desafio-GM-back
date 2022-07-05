import { connection } from "..";
import { posts } from "../types";

export default async function insertPosts(insertPosts:posts):Promise<string>{
    
    const {id, mensagem} = insertPosts
    await connection("postagem")
    .insert({
        id,
        mensagem
    })

    return "Post feito com sucesso"
}