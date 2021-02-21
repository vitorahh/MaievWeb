import React from 'react';

import { useForm } from 'react-hook-form';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';

import { Register } from '../../Interfaces/login';
import { registerUser } from '../../Controllers/Login/LoginControllers';
import { AlertError } from '../../Services/SweetAlerts/Alerts';

function RegisterForm(){
    const { register, handleSubmit } = useForm();
    let history = useHistory();
    const onSubmit = async (data:any) => {
        if(data.DS_SENHA !== data.DS_CONFIRMA_SENHA)
            AlertError("As senhas devem ser iguais!");
        
        else{
            const user:Register = {
                DS_USUARIO: data.DS_USUARIO,
                DS_LOGIN:data.DS_LOGIN,
                DS_SENHA: data.DS_SENHA,
                NR_IDADE:data.NR_IDADE
            };
            const valid = await registerUser(user) 
            if(valid)
                history.push("/");
        }    
    } 
    return (
        <form id="Register-Illidan" className="LoginSuperNova" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-block">
            <input type="text" 
                className="usuario" 
                placeholder="Nome"
                autoComplete="off"
                name="DS_USUARIO" 
                ref={register} />
            <input type="text" 
                className="usuario" 
                placeholder="Usuario"
                autoComplete="off"
                name="DS_LOGIN" 
                ref={register} />
            <input type="password" 
                className="Senha"
                placeholder="Senha"
                autoComplete="off"
                name="DS_SENHA" 
                ref={register} />
            <input type="password" 
                className="Senha"
                placeholder="Confirma senha"
                name="DS_CONFIRMA_SENHA" 
                autoComplete="off"
                ref={register} />
             <input type="number" 
                className="usuario" 
                placeholder="Idade"
                autoComplete="off"
                name="NR_IDADE" 
                ref={register} />
        </div>
        <div className="button-container">
            <Link to="/" className="btn-link">
                Voltar
            </Link>
            <button className="btn-success" type="submit">
                <FontAwesomeIcon icon={faUserPlus} />
                Cadastrar
            </button>
        </div>
    </form>
    )
}
export default RegisterForm;