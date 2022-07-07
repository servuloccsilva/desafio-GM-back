export type posts = {
    id:string,
    mensagem:string
}

export type postsInput = {
    mensagem:string
}

export type comentario = {
    id:string,
    comentario:string,
    id_postagem:string
}

export type comentarioInput = {
    comentario:string
}
