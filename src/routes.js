const express = require ('express');
const UsuarioControllers = require("../src/controllers/UsuarioControllers");

const routes = express.Router();

routes.get('/',(req,res)=>{res.json('teste de funcionalidade')});
routes.get('/usuarios',UsuarioControllers.listar)

module.exports = routes;