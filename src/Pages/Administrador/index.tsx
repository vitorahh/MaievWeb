import React from 'react';

import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { Link, useHistory } from 'react-router-dom';

import './styles.css'
import { useState } from 'react';
import { useEffect } from 'react';

import { lstProdutos } from '../../Controllers/Produtos/ProdutosControllers';
import { DropDownProdutos } from '../../Validation/ProdutosValidation';

import { ListarLancesControllers } from '../../Controllers/Leilao/LeilaoControllers';

import { TableLances } from './TableAdministrador/index';
import { lstLancesInterface } from '../../Interfaces/Lance';
import ModalProduto from './ModalProduto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faHammer } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';


function Administrador(){
    const [DropdownProduto, setDropdownProduto] = useState<Array<object>>([]);
    const [Produtos, setProdutos] = useState<Array<lstLancesInterface>>([]);
    const [Reload, setReload] = useState<boolean>(false)
    useEffect(() => {
        lstProdutos().then((response) =>{
            if(response){
                setDropdownProduto(DropDownProdutos(response));
            }
        });
        setReload(false);
    },[Reload]);
    
    let history = useHistory();
    if(!localStorage.getItem("AccessToken")){
        history.push("/");
    }
    const handleDropdown = (event: any,data:any) => {
        ListarLancesControllers(parseInt(data.value)).then((response) =>{
            setProdutos(response);
        })
    };
   
    return (
        <div className="Container">
            <div className="Menu">
            <div className="infor-Menu">
                    <h1>Seja bem Vindo</h1>
                    <label>Dlha Forense</label>
                </div>
                <div className="options-Menu">
                    <Link to="/Home/Dashboard" className="btn-dark">
                        <FontAwesomeIcon icon={faHammer} /> Leilao</Link>
                </div>
            </div>
            <hr/>
            <div className="body">
                <div className="Produtos">
                    <div className="dropProdutos">
                        <Dropdown
                            placeholder="Selecione um Produto"
                            fluid
                            className="dropdown"
                            selection
                            options={DropdownProduto}
                            onChange={handleDropdown}
                        />
                    </div>
                    <div className="btngroupCad">
                        <button className="btn-success"  onClick={()=> render(
                                                <ModalProduto titleModal="Cadastrar Produto"setRealod={setReload} />
                                                    )}>
                            <FontAwesomeIcon icon={faGavel} /> Cadastrar
                        </button>
                    </div>
                   
                    
                </div>
                <div className="leilao">
                    {TableLances(Produtos)}
                </div>
            </div>
       </div>
      
    )
}
export default Administrador;