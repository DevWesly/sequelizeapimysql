// const { update } = require('../models/Usuario');
const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');

module.exports = {
    async criar(req, res) {
        const {
            idUsuario
        } = req.params;
        const {
            cep,
            rua,
            numero
        } = req.body;

        const usuario = await Usuario.findByPk(idUsuario);

        const enderecoUsuario = await Usuario.findByPk(idUsuario, {
            include: {
                association: "enderecos"
            }
        });

        if (!usuario) {
            return res.json('Usuario não encontrado');
        } else {
            const endereco = await Endereco.findOrCreate({
                where: {
                    rua,
                    cep,
                    numero,
                    idUsuario
                }
            })
            return res.json(enderecoUsuario)
        }

    },
    async enderecos(req, res) {
        let enderecos = await Endereco.findAll()
        return res.json(enderecos);
    },
    async delete(req, res) {
        let idUsuario = req.body.idUsuario;
        let idEndereco = req.body.idEndereco;


        const usuario = await Usuario.findByPk(idUsuario, {
            include: {
                association: "enderecos"
            }
        });

        if (!usuario) {
            return res.json({
                "message": "usuario não se encontra no nosso banco de dados"
            })
        }

        const endereco = await Endereco.findOne({
            where: {
                idUsuario,
                id: idEndereco
            }
        })
        if (!endereco) {
            return res.json(usuario)
        }
        await endereco.destroy();
        return res.json(await usuario)

    },
    async update(req,res){
        let idEndereco = req.params.idEndereco;
        const {cep,rua,numero} = req.body;
        let endereco = await Endereco.findOne({where:{id:idEndereco}})
        if(!endereco){
            return res.json({"message":"endereço nao encontrado"})
        }
       let attEndereco =  await Endereco.update({cep,rua,numero},{where:{id:idEndereco}});

        let enderecos = await Endereco.findAll()
        return res.json(enderecos);
    },
    async deletarPorId (req,res){
        let idEndereco = req.params.id;
        let endereco = await Endereco.findOne({where:{id:idEndereco}});
        if(!endereco){
            return res.json({"message":"endereço não achei"})
        }
        await endereco.destroy();
        let enderecos = await Endereco.findAll()
        return res.json({"message":[`Endereço com id ${idEndereco} retirado do nosso banco de dados`],enderecos});

    }
}