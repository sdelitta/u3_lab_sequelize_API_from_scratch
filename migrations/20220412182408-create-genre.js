'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      genreName: {
        type: Sequelize.STRING
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'movie_id',
        onDelete: 'CASCADE',
        refrences: {
          model: 'movies',
          key: 'id'
        }},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('genres');
  }
};