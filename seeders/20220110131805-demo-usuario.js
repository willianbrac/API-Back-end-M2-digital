'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('m2_usuarios', [
      {
        name: 'John Doe',
        login: 'JDn',
        password: '123',
        ativo: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        equipe_id: 1
      },
      {
        name: 'Diogo Fernandes',
        login: 'Fernandes2022',
        password: '123',
        ativo: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        equipe_id: 1
      },
      {
        name: 'Maria Gisele',
        login: 'GeiseM',
        password: '123',
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        equipe_id: 1
      },
      {
        name: 'Luana Nascimento',
        login: 'Luna',
        password: '123',
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        equipe_id: 1
      },
      {
        name: 'Matheus Luiz',
        login: 'matherus123',
        password: '123',
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        equipe_id: 2
      },
      {
        name: 'Gilberto Oliveira',
        login: 'gil',
        password: '123',
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        equipe_id: 2
      },
      {
        name: 'Ana Tereza',
        login: 'aninha',
        password: '123',
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        equipe_id: 2
      },
      {
        name: 'Cristiano Rodrigues',
        login: 'cris',
        password: '123',
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        equipe_id: 3
      },
      {
        name: 'Maria Conceição',
        login: 'marie',
        password: '123',
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        equipe_id: 3
      },
      {
        name: 'Silvana Medeiros',
        login: 'silvinha',
        password: '123',
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        equipe_id: 3
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('m2_usuarios', null, {});
  }
};
