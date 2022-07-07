
import { connection } from "..";
import { posts } from "../types";


const typeMensagem = (mensagem:any) =>{
    const createMensagem :posts={
        id:mensagem.id,
        mensagem:mensagem.mensagem
    }
    return createMensagem
}
export default async function deletePostById(id:string):Promise<void>{
try {
     await connection("postagem")
    .del()
    .where({id})
} catch (error:any) {
    throw new Error (error.sqlMessage)
}
   
}


