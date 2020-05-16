import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import tiposLogin from './Pages/Tipo Login';

import gerenciaLogin from './Pages/Login Gerencia';
//import  from './Pages/Gerencia';

import funcionarioLogin from './Pages/Login Funcionario';
import funcionarioHome from './Pages/Funcionario';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={tiposLogin}/>
                <Route path="/gerenciaLogin" component={gerenciaLogin}/>
                <Route path="/funcionarioLogin" component={funcionarioLogin}/>
                <Route path="/funcionarioHome" component={funcionarioHome}/>
            </Switch>
        </BrowserRouter>
    )
}