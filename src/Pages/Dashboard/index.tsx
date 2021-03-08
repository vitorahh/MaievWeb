import React from 'react';

import { render } from '@testing-library/react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css'
import { useState } from 'react';
import { useEffect } from 'react';

import { lstProdutos } from '../../Controllers/Produtos/ProdutosControllers';
import { lstProdutosInterface } from '../../Interfaces/Produtos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faGavel } from '@fortawesome/free-solid-svg-icons';

import ModalLance from './Modal';
import { getUserController } from '../../Controllers/Login/LoginControllers';

function Dashboard(){
    const [Produtos, setProdutos] = useState<Array<lstProdutosInterface>>([]);
    const [Reload, setReload] = useState<boolean>(false)
    const [administardor, setAdministrador] = useState<boolean>(false)
    useEffect(() => {
        lstProdutos().then((response) =>{
            if(response){
                setProdutos(response);
            }
        });
        getUserController().then(response =>{
            setAdministrador(response.fL_ADMINISTRADOR)
        })
        
        setReload(false);
    },[Reload]);
    
    let history = useHistory();
    if(!localStorage.getItem("AccessToken")){
        history.push("/");
    }
    return (
        <div className="Container">
            <div className="Menu">
                <div className="infor-Menu">
                    <h1>Seja bem Vindo</h1>
                    <label>Dlha Forense</label>
                </div>
                <div className="options-Menu">
                    {(administardor) ? <Link to="/Home/Administrador" className="btn-dark">
                    <FontAwesomeIcon icon={faCrown} /> Administrador</Link> : <></>}
                </div>
            </div>
            <hr/>
            <div className="body">
                <h1>Produtos</h1>
                <div className="cards-container" >
                   {Produtos.map((response) =>
                        <div className="cards" key={response.iD_PRODUTO}>
                            <div className="cards-header">
                                <div className="cards-title">
                                        {response.dS_NOME}
                                </div>
                                <div className="cards-Number">
                                    Total de {response.nR_LANCES} Lances
                                </div>
                            </div>
                            <div className="cards-body">
                                <h3 title="Ultimo Lance" className="moneycard">{response.vL_LANCE_ATUAL.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
                                <button className="btn-lance"  onClick={()=> render(
                                                <ModalLance 
                                                    titleModal="Dar um Lance"
                                                    setRealod={setReload} 
                                                    ID_PRODUTO={response.iD_PRODUTO} 
                                                    key={response.iD_PRODUTO}
                                                />
                                            )}>
                                        <FontAwesomeIcon icon={faGavel} /> Dar um Lance
                                    </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
       </div>
      
    )
}
export default Dashboard;