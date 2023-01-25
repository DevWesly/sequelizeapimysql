'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');

class Profissao extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING
    }, {
      sequelize,
      tableName: "profissoes"
    })
  }
  static associate(models) {
    Profissao.belongsToMany(models.Usuario, {
      foreignKey: "idProfissao",
      through: "usuarioprofissoes",
      as: "usuarios"
    })
  }
}

module.exports = Profissao;