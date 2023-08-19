export interface UserNewPassword {
    user_id: number;
    user_email: string;
    code: string;
    new_password: string;
    code_id: number;

    success: boolean;
    msg: string;
    codigo: string;

    alert: string;
}