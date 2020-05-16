import React, {useState} from 'react';
import './estilo.css';
import logo from '../../Assets/logo.png';
import api from '../../Service/api'; 
import {useHistory} from 'react-router-dom';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('login', { usuario, senha});
            //console.log(response.data.nome);

            localStorage.setItem('id', response.data.id);
            localStorage.setItem('nome', response.data.nome);

            history.push('/gerencia');
        } catch (error) {
            alert('Falha no login, email ou senha incorreto');

        }
        
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt=" Logo"></img>
                <form onSubmit={handleLogin}>
                    <h2>Faça seu Login</h2>
                    <div>
                        <input placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>
                    <button className="button" type="submit">Entrar</button>
                </form>
            </section>
        </div>
    );
}