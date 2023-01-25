'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('usuarioProfissoes', {
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
      idProfissao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'profissao',
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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

    return queryInterface.dropTable('usuarioProfissoes');
  }
};