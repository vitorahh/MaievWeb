
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useForm } from "react-hook-form";

import CurrencyInput from 'react-currency-input-field';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSave } from '@fortawesome/free-solid-svg-icons';
import { Cadastrar } from '../../../Controllers/Produtos/ProdutosControllers';



interface ModalLanceInterface{
  titleModal:string,
  setRealod: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalProduto(props:ModalLanceInterface) {
    const [show, setShow] = useState(true);

    const { register, handleSubmit } = useForm();

    const handleClose = () => {
        setShow(false)
    };

    const onSubmit = async (data:any) => {
        const Produto = {
            DS_NOME: data.DS_NOME,
            VL_PRODUTO: Number.parseInt(data.VL_PRODUTO)
        }

       const valid = await Cadastrar(Produto)   
        if(valid)
        {
            props.setRealod(true);
            handleClose();
        }
      } 
      

    return (
    <Modal show={show} onHide={handleClose}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
            <Modal.Title>{props.titleModal}</Modal.Title>
        </Modal.Header>
        <form id="formEdituser" onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                id="DS_NOME"
                                name="DS_NOME"
                                ref={register({ required: true })}
                                placeholder="Nome Produto"/>
                        </div>
                        <div className="form-group">
                            <label>Valor Produto</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <CurrencyInput
                                    id="VL_PRODUTO"
                                    name="VL_PRODUTO"
                                    className="form-control"
                                    placeholder="Digite um valor"
                                    allowNegativeValue={false}
                                    defaultValue={0}
                                    ref={register({ required: true })}
                                />
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline-success font-weight-bold mr-2" type="submit">
                    <FontAwesomeIcon icon={faSave} className="mr-3"/> Cadastrar Produto
                </button>
            </Modal.Footer>
        </form>
    </Modal>
)};
