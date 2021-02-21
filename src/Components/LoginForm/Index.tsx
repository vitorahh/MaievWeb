
import React from 'react';

import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import { Link, useHistory } from 'react-router-dom';

import { login } from '../../Interfaces/login';

import { doLogin } from '../../Controllers/Login/LoginControllers';


function LoginForm(){
    localStorage.removeItem("AccessToken");

    //Formulario
    let history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: login) => {
        const user:login = {
            DS_LOGIN:data.DS_LOGIN,
            DS_SENHA:data.DS_SENHA
        }
        doLogin(user)
        .then((response) => {
            if(response === true)
            history.push("/Home/Dashboard");
        })
    } 
    return (
        <form 
        id="loginMaiev"
        className="LoginSuperNova" 
        onSubmit={handleSubmit(onSubmit)}>
            <div className="input-block">
                <input type="text" 
                    className="usuario" 
                    id="DS_LOGIN"
                    name="DS_LOGIN" 
                    ref={register} 
                    placeholder="Usuario"/>
                <input type="password" 
                    className="Senha" 
                    id="DS_SENHA"
                    name="DS_SENHA"
                    ref={register({ required: true })}
                    placeholder="Senha"/>
            </div>
            <div className="button-container">
                <button className="btn-success" type="submit">
                    <FontAwesomeIcon icon={faSignInAlt} />
                        Entrar
                </button>
                <Link to="/register" className="btn-link" >
                    Cadastrar-se
                </Link>
               
            </div>
    </form>
    )
}
export default LoginForm;