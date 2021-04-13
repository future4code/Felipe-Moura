export type authenticationData  ={
    id: string,
    role: rules
}

export type user = {
    id: string,
    email: string,
    password: string,
    role: rules
}

export enum rules {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"

}