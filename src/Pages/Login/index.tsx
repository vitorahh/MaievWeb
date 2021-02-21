import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import { Container } from './styles';
import LogoMaiv from '../../Assets/Images/LogoMaiev.svg';
import loginImg from '../../Assets/Images/loginImg.svg'


//components
import LoginForm from '../../Components/LoginForm/Index';
import RegisterForm from '../../Components/RegisterForm/index';

import './styles.css'

function LoginPage(){
    return(
        <div id="page-login">
            <div className="page-login-content" id="container">
                <img src={LogoMaiv} alt="Logo Super Nova" className="logo-img"/>
                <div className="logo-container">
                   <img src={loginImg} alt="Login Super Nova"/> 
                    <Switch>
                        <Route path="/" exact component={LoginForm} />
                        <Route path="/Register" exact component={RegisterForm} />
                    </Switch>
                </div>
                <h2>Leilão de Produtos Diversos</h2>
            </div>
        </div>
    )
}

export default LoginPage;
  