'use strict';

module.exports = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [{
      title: 'The Sunset Limited',
      year: 2011,
      description: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.'
    }])
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies')
    }
}