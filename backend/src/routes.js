const express = require('express');
const routes = express.Router();

const usuarios = require('./controllers/usuarios');
const login = require('./controllers/login');

routes.post('/usuarios', usuarios.create);
routes.post('/loginFuncionario', login.create);
routes.post('/funcionarioHome', login.create);

module.exports = routes;