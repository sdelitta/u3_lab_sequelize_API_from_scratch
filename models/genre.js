'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Genre.belongsTo(models.Movies, {
        foreignKey: 'movie_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Genre.init({
    genreName: DataTypes.STRING,
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'movie_id',
      onDelete: 'CASCADE',
      refrences: {
        model: 'movies',
        key: 'id'
      }},
    sequelize,
    modelName: 'Genre',
    tableName: 'genre'
  });
  return Genre;
};