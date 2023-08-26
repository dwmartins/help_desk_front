export interface User {
    user_id: number;
    user_nome: string;
    user_sobrenome: string;
    user_email: string;
    user_tipo: string;
    user_password: string;
    user_ativo: string;
    user_token: string;

    success: boolean;
    msg: string;
    alert: string;

    userData: UserData;
}

export interface UserData {
    user_id: number;
    user_nome: string;
    user_sobrenome: string;
    user_email: string;
    user_foto: string;
    user_tipo: string;
}