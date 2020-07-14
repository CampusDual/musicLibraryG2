interface user {
    user_email: string,
    user_password:string,
    user_name: string,
    user_surname:string,
    user_birth_date:number,
    user_creation_date:number
}

interface userRequestBody{
    filter: string,
    columns: string[]
}