'use strict';

module.exports = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genres', [
      {
        genreName: 'Drama',
        movie_id: 1
      }])
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres')
    }
}