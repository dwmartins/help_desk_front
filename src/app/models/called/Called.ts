export interface Called {
    user_id: number,
    titulo: string,
    descricao: string,
    prioridade: string,
    categoria: string

    // res
    success: boolean,
    msg: string
}