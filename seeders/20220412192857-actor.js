'use strict';

const movie = require("../models/movie");

module.exports = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('actors', [
      {
        actorName: 'Samuel L. Jackson',
        age: 73,
        movie_id: 1
      },
      {
      actorName: 'Tommy Lee Jones',
      age: 75,
      movie_id: 1
      }
    ])
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('actors')
    }
}