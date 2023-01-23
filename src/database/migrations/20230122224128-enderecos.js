'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'usuario',
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  async down(queryInterface, Sequelize) {

    return queryInterface.dropTable('enderecos');
  }
};