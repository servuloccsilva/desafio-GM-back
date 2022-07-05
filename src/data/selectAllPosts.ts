import { connection } from "..";
import { posts } from "../types";


const typeMensagem = (mensagem:any) =>{
    const createMensagem :posts={
        id:mensagem.id,
        mensagem:mensagem.mensagem
    }
    return createMensagem
}
export default async function selectAllPosts():Promise<posts[] | undefined>{

    const result = await connection("postagem")

    const allMensagemType = result.map((mensagem)=>{
        return typeMensagem(mensagem)
    })

    console.log(allMensagemType)
    return result
}


