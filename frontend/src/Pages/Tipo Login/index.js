import React from 'react';
import './estilo.css';
import logo from '../../Assets/logo.png';
import {useHistory} from 'react-router-dom';

export default function TiposLogin() {

    const history = useHistory();

    function Gerencia() {
        history.push('/gerenciaLogin')
    }

    function Operacional() {
        history.push('/funcionarioLogin')
    }

    return(
        <div className="logon-container">
            <section className="buttons">
                <img src={logo} alt=" Logo do sistema"/>
                <h2>Escolha seu tipo de usuario</h2>
                <div>
                    <button className="button" onClick={Gerencia} type="button">Gerencia</button>
                    <br/>
                    <button className="button" onClick={Operacional} type="button">Funcionario</button>
                </div>
            </section>
        </div>
    );
}