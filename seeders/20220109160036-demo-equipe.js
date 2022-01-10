'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
        'm2_equipes', [
          {
            name: 'Go Team',
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'TopTeam',
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Equipe Alpha',
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('m2_equipes', null, {});
  }
};
