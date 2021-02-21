import { Register } from "../Interfaces/login";

export async function ValidationRegister(user:Register){
    try{
        const regex = /[0-9]/;

        if(user.DS_USUARIO.length < 3 )
            throw new Error("Nome Invalido!");
        if(regex.test(user.DS_USUARIO))
            throw new Error("Nome possuie caracteres Invalidos!");
        if(user.DS_SENHA.length < 8)
            throw new Error("A Senha deve conter pelo menos 8 caracteres!");
        if(user.DS_LOGIN.length < 5)
            throw new Error("O Usuario deve conter pelo menos 5 caracteres!");
        if(user.NR_IDADE < 18)
            throw new Error(":( Você ainda não tem idade para essas coisas!");
    }catch(err){
        throw err;
    }
}