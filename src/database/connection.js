const Sequelize = require("sequelize");
const Usuario = require('../models/Usuario');


const dbConfig = require('../config/dbConfig');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);

// Usuario.associate(connection.models);   


module.exports = connection;