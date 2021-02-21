
//Import do React
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

//Pages
import login from './Pages/Login/index';
import Dashboard from './Pages/Dashboard/index';
import Administrador from './Pages/Administrador/index'

import './Assets/css/global.css';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:Form?" exact component={login} />
        <Route path="/Home/Dashboard" exact><Dashboard/></Route>
        <Route path="/Home/Administrador" exact><Administrador/></Route>
      </Switch>
    </BrowserRouter>
    
  );
}
  
  export default Routes;