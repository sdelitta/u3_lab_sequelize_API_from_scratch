'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.hasMany(models.Actors, {
        foreignKey: 'movie_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Movie.hasOne(models.Genres, {
        foreignKey: 'movie_id'
      })
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movie'
  });
  return Movie;
};