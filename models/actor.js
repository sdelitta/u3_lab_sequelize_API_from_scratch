'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Actor.belongsTo(models.Movies, {
        foreignKey: 'movie_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Actor.init({
    actorName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'movie_id',
      onDelete: 'CASCADE',
      refrences: {
        model: 'movies',
        key: 'id'
      }},
  }, {
    sequelize,
    modelName: 'Actor',
    tableName: 'actor'
  });
  return Actor;
};