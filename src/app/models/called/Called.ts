export interface Called {
    chamado_id: number,
    user_id: number,
    titulo: string,
    user_nome: string,
    descricao: Buffer,
    descricaoHtml: string,
    descricaoString: string | null,
    prioridade: string,
    status: string,
    categoria: string,
    createdAt: Date,
    updateAt: Date

    // res
    success: boolean,
    msg: string
}

export interface Buffer {
    data: [];
}