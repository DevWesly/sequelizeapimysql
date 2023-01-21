const Sequelize = require("sequelize");

const dbConfig = require('../config/dbConfig');
const { connect } = require("../routes");

const connection = Sequelize(dbConfig);

module.exports = connection;