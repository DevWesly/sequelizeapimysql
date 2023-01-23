const express = require ('express');
const UsuarioControllers = require("../controllers/UsuarioControllers");

const routes = express.Router();

routes.get('/usuario/:id',UsuarioControllers.listarUm);
routes.get('/usuarios',UsuarioControllers.listarTodos);
routes.post('/usuarios/criar',UsuarioControllers.criar)
routes.post('/usuario/atualizar/:id',UsuarioControllers.update);
routes.delete('/usuario/deletar/:id',UsuarioControllers.delete);

module.exports = routes;