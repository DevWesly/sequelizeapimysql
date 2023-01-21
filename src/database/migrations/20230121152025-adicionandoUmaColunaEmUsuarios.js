'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Usuarios', 'sobrenome', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Usuarios', 'sobrenome')
  }
};