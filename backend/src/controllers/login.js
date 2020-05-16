const connect = require('../database/conexao');

module.exports = {
     async create(request, response) {
        const { registro, senha } = request.body;
        
        const user = await connect('usuarios').where({registro: registro, senha: senha}).select('nome', 'id').first();
        //console.log({registro, senha})

    if (!user) {
        return response.status(400).json({ error: 'Nenhum usuario encontrado'});
    }
        return response.json(user);
    }
};