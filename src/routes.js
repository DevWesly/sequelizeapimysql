const express = require ('express');
const UsuarioControllers = require("./controllers/UsuarioControllers");

const routes = express.Router();

routes.get('/usuario/:id',UsuarioControllers.listarUm);
routes.get('/usuarios',UsuarioControllers.listarTodos);
routes.post('/usuarios/criar',UsuarioControllers.criar)

module.exports = routes;