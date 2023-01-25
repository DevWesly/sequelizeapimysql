const Usuario = require("../models/Usuario");
const Profissao = require("../models/Profissao");

module.exports = {
  async listar(req, res) {
    return res.json(await Profissao.findAll());
  },
  async associar(req, res) {
    let idUsuario = req.params.idUsuario;
    let nome = req.body.nomeProfissao;
    // let usuario = await Usuario.findByPk(idUsuario);
    let usuario = await Usuario.findByPk(idUsuario, {
        include: [{
            association: "profissao"
        }, {
            association: "enderecos",
        }, ],
    });
    if (!usuario) {
      return res.json({ message: "usuario nao foi encontrado" });
    }
    const [profissao] = await Profissao.findOrCreate({
      where: {nome}
    });

    await usuario.addProfissao(profissao);

    return res.json(usuario);
  },
  async delete (req,res){
    let idUsuario = req.params.idUsuario;
    let nome = req.body.nomeProfissao;
    // let usuario = await Usuario.findByPk(idUsuario);
    let usuario = await Usuario.findByPk(idUsuario, {
        include: [{
            association: "profissao"
        }, {
            association: "enderecos",
        }, ],
    });
    if (!usuario) {
      return res.json({ message: "usuario nao foi encontrado no nosso sistema" })
    }
    const [profissao] = await Profissao.findAll({
      where: {nome}
    });
    if(!profissao){
       return res.json({
           "message": "Profissão não encontrada no nosso sistema"
       })
    }
    await usuario.removeProfissao(profissao);

    return res.json(usuario);
  }
};
