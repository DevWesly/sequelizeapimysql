const express = require ('express');
const ProfissaoControllers = require("../controllers/ProfissaoControllers")
const UsuarioControllers = require("../controllers/UsuarioControllers");

const routes = express.Router();

routes.get('/profissoes',ProfissaoControllers.listar);
routes.post('/profissao/usuario/:idUsuario',ProfissaoControllers.associar)
routes.delete('/profissao/usuario/:idUsuario',ProfissaoControllers.delete)


module.exports = routes;