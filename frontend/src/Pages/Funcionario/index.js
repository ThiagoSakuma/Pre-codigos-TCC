import React from 'react';
import {FiPower} from 'react-icons/fi';
import logo from '../../Assets/logo.png';
import { useHistory } from 'react-router-dom';
import './estilo.css';

export default function FuncionarioHome() {

    const history = useHistory();

    function handleLogout() {
        localStorage.clear();
    
        history.push('/');
      }

    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="logo do sistema"/>
                <span>Bem vindo, Thiago</span>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h2>Selecione uma das opçoes abaixo</h2>

            <ul>
                <li>
                    <button type="button">
                        Limpeza Imediata
                    </button>
                </li>
                <li>
                    <button type="button">
                        Reposição de Materiais
                    </button>
                </li>
                <li>
                    <button type="button">
                        Limpeza Terminal
                    </button>
                </li>
                <li>
                    <button type="button">
                        Retirada de Residuos
                    </button>
                </li>
                <li>
                    <button type="button">
                        Limpeza Concorrente
                    </button>
                </li>
            </ul>
        </div>
    );
}