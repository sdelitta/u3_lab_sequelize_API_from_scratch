'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('actors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      actorName: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('actors');
  }
};