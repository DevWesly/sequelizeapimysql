const Sequelize = require("sequelize");
const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco')


const dbConfig = require('../config/dbConfig');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Endereco.init(connection);

Usuario.associate(connection.models);   


module.exports = connection;