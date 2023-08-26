export interface Called {
    chamado_id: number,
    user_id: number,
    titulo: string,
    descricao: string,
    prioridade: string,
    categoria: string,
    createdAt: Date,
    updateAt: Date

    // res
    success: boolean,
    msg: string
}