

import Axios from '../API';

import { LanceConfig } from '../../Interfaces/Lance';

export function darLance(props:LanceConfig){
    
    return Axios({
        method: 'post',
        url: 'Leilao/CadastrarLance',
        headers: { Authorization: `Bearer ${localStorage.getItem("AccessToken")?.replace(/['"]+/g, '')}`},
        data: props
    })
    .then((response)=>{
        return response.data;
    })
    .catch((err)=>{
        throw new Error(err.response.data.describe);
    })  
}

export function lstLances(ID_PRODUTO:Number){
    
    return Axios({
        method: 'GET',
        url: `Leilao/ListarLances?ID_PRODUTO=${ID_PRODUTO}`,
        headers: { Authorization: `Bearer ${localStorage.getItem("AccessToken")?.replace(/['"]+/g, '')}`},
    })
    .then((response)=>{
        return response.data.lstLances;
    })
    .catch((err)=>{
        throw new Error(err.response.data.describe);
    })  
}