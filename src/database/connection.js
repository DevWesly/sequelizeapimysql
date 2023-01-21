const Sequelize = require("sequelize");

const dbConfig = require('../config/dbConfig');
const Usuario = require("../models/Usuario");

const connection = Sequelize(dbConfig);

Usuario.init(connection);

module.exports = connection;