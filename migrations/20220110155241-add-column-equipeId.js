'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn(
      'm2_usuarios',
      'equipe_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'm2_equipes',
          key: 'id',
        },
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'm2_usuarios',
      'equipe_id',
    )
  }
};
