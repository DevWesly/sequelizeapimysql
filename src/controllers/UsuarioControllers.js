const { update } = require('../models/Usuario');
const Usuario = require('../models/Usuario');

module.exports = {
       async listarUm(req, res) {
        let usuarioId = req.params.id;
       let user = await Usuario.findOne({where:{id : usuarioId}});
       if(!user){return res.json({'msg':'usuario não encontrado'})};
        return res.json({ user });
    },
    async listarTodos(req, res) {
        let usuarios = await Usuario.findAll();
        return res.json({usuarios });
    },
    
    async criar(req, res) {
        const {nome,sobrenome,idade} = req.body;
        await Usuario.findOrCreate({
            where:{nome,sobrenome,idade}
        });
        res.json(await Usuario.findAll())
    },
    async update(req,res){
        const {nome,sobrenome,idade} = req.body;
        let idUsuario = req.params.id;
        
        await Usuario.update({nome,sobrenome,idade},{where:{id:idUsuario}});
        
        let user = await Usuario.findOne({where:{id : idUsuario}});
        if(!user){return res.json({'msg':'usuario inexistente'})};
        return res.json(user);
    },
    async delete (req,res){
        let idUsuario = req.params.id;
        await Usuario.destroy({where:{id : idUsuario}})
        return res.json(await Usuario.findAll())
    }
}