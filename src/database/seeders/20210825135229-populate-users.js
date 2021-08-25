'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', 
  [
      {
        name: 'John Doe',
        email: 'test@medium.com',
        password: '9ff7b641722c30acdc058f2499d97dd8',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'John Travolta',
        email: 'test2@medium.com',
        password: '082b66a712e3efe31385f3158e057496',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],{}),
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelte('users', null)
  }
};
