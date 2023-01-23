const express = require ('express');
const UsuarioControllers = require("../controllers/UsuarioControllers");
const EnderecoControllers = require("../controllers/EnderecoControllers");
const { update } = require('../models/Endereco');

const routes = express.Router();

routes.post("/endereco/:idUsuario",EnderecoControllers.criar);
routes.get('/enderecos',EnderecoControllers.enderecos);
routes.delete('/endereco/delete',EnderecoControllers.delete);
routes.post("/endereco/update/:idEndereco",EnderecoControllers.update);
routes.get('/deletarendereco/:id',EnderecoControllers.deletarPorId)






module.exports = routes;