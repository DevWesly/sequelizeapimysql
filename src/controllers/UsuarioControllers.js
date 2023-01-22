const Usuario = require('../models/Usuario');

module.exports = {
       async listarUm(req, res) {
        let usuarioId = req.params.id;
       let user = await Usuario.findOne({where:{id : usuarioId}});
       if(!user){return res.json({'msg':'usuario não encontrado'})}
        return res.json({
            user
        });
    },
    async listarTodos(req, res) {
        let usuarios = await Usuario.findAll();
        return res.json({
            usuarios
        });
    },
    async criar(req, res) {
        const {nome,sobrenome,idade} = req.body;
        await Usuario.findOrCreate({
            where:{nome,sobrenome,idade}
        });
        // await Usuario.create({ nome,sobrenome,idade});
        res.json(await Usuario.findAll())

    }
}