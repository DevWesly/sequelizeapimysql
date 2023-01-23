const {
    Model,
    DataTypes
  } = require('sequelize');
  
  class Usuario extends Model {
    static init(sequelize) {
      super.init({
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        idade: DataTypes.INTEGER
      }, {
        sequelize,
        tableName:"usuarios"
      })
    }
    static associate(models) {
      Usuario.hasMany(models.Endereco, {
        foreignKey: "idUsuario",
        as: "enderecos"
      });
    }
  }
  
  module.exports = Usuario;