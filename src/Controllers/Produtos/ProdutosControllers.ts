import { listaProdutos,CadastrarProduto } from "../../Services/Produtos/Produtos";

import { cadProduto, lstProdutosInterface } from "../../Interfaces/Produtos";
import { AlertError, AlertSuccess } from "../../Services/SweetAlerts/Alerts";


export async function lstProdutos(){
      try{ 
            return await listaProdutos()
                  .then((response:Array<lstProdutosInterface>) => {
                        return response;
                  }).catch((err) => {
                        AlertError(err.message);
                  });
      }catch(err){
            AlertError(err.message);
      }
};
export async function Cadastrar(props:cadProduto){
      try{ 
            return await CadastrarProduto(props)
            .then((response) => {
                  AlertSuccess(response.message);
                  return true;
              })
              .catch((err) => {
                  AlertError(err.message);
                  return false;
              });
      }catch(err){
            AlertError(err.message);
      }
};
