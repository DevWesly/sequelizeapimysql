const Sequelize = require("sequelize");


const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');
const Profissao = require("../models/Profissao");



const dbConfig = require('../config/dbConfig');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Endereco.init(connection);
Profissao.init(connection);

Usuario.associate(connection.models); 
Endereco.associate(connection.models);  
Profissao.associate(connection.models);  


module.exports = connection;