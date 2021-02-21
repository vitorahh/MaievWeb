
import { login, Register } from '../../Interfaces/login';
import * as LoginServices from '../../Services/User/User';
import { AlertError, AlertSuccess } from '../../Services/SweetAlerts/Alerts';
import { ValidationRegister } from '../../Validation/Loginvalidation';
import { GetUser } from '../../Services/User/User';


export function doLogin(user:login){
    return LoginServices.doLogin(user)
        .then((response) => {
            localStorage.setItem('AccessToken', JSON.stringify(response.token))
            return true;
        })
        .catch((err) => {
            AlertError(err.message);
        });
}

export async function registerUser(user:Register){
    try{

        await ValidationRegister(user)

        const valid = await LoginServices.register(user)
            .then((response) => {
                AlertSuccess(response.message);
                return true;
            })
            .catch((err) => {
                AlertError(err.message);
                return false;
            });
        return valid
    }catch(err){
        AlertError(err.message);
    }
}


export async function getUserController(){
    try{
        const valid = await GetUser()
            .then((response) => {
                return response;
            })
            .catch((err) => {
                AlertError(err.message);
            });
        return valid
    }catch(err){
        AlertError(err.message);
    }
}