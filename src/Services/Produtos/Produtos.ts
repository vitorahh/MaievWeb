import { cadProduto } from '../../Interfaces/Produtos';
import Axios from '../API';

export function listaProdutos(){
    return Axios.get(`Produtos/Listar`, { headers: { Authorization: `Bearer ${localStorage.getItem("AccessToken")?.replace(/['"]+/g, '')}` } })
        .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            throw new Error(err.response.data.describe);
        })
}

export function CadastrarProduto(props:cadProduto){
    return Axios({
        method: 'POST',
        url: `Produtos/Cadastrar`,
        headers: { Authorization: `Bearer ${localStorage.getItem("AccessToken")?.replace(/['"]+/g, '')}`},
        data: props
    }).then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            throw new Error(err.response.data.describe);
        })
}
