'use strict';

const {  Model, DataTypes} = require('sequelize');

class Endereco extends Model {
  static init(sequelize) {
    super.init({
      cep: DataTypes.STRING,
      rua: DataTypes.STRING,
      numero: DataTypes.INTEGER
    }, {
      sequelize,
      tableName:"enderecos"
    })
  }
  static associate(models) {
    this.belongsTo( models.Usuario, {
      foreignKey: "id",
      as: "enderecos"
    })
  }
}

module.exports = Endereco;