const connect = require('../database/conexao');

module.exports = {
    async index(request, response) {
      const usuarios = await connect('usuarios').select('*');
    
      return response.json(usuarios);
    },
  
    async create(request, response) {
      const {nome, registro, senha, tipoUsuario} = request.body;
      
      await connect('usuarios').insert({
        nome,
        registro,
        senha,
        tipoUsuario
      });
  
      return response.json({ nome, tipoUsuario });
    }
  };