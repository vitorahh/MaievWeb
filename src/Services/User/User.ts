import { login, Register } from '../../Interfaces/login';
import Axios from '../API';


export function doLogin(props:login){
    return Axios.post(`/Authenticate/Login`, props)
        .then((response)=>{
            if(response.status === 401)
                console.log(response);
            return response.data;
        })
        .catch((err)=>{
            throw new Error(err.response.data.describe);
        })
}
export function register(props:Register){
    return Axios.post(`/Authenticate/Register`, props)
        .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            throw new Error(err.response.data.describe);
        })
}
export function GetUser(){
    return Axios.get(`/Authenticate/GetUser`,{ headers: { Authorization: `Bearer ${localStorage.getItem("AccessToken")?.replace(/['"]+/g, '')}` } })
        .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            throw new Error(err.response.data.describe);
        })
}