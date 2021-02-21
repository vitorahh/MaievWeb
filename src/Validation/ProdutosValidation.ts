import { lstProdutosInterface } from "../Interfaces/Produtos"

export function DropDownProdutos(response:Array<lstProdutosInterface>){
    const friendOptions:Array<Object> = [];
    
    response.map((Produtos:lstProdutosInterface) => {
        const Object = {
          key: Produtos.iD_PRODUTO.toString(),
          text: Produtos.dS_NOME,
          value: Produtos.iD_PRODUTO.toString()
        }

        return friendOptions.push(Object)
    });
    return friendOptions;
};