const { DataTypes, Sequelize, Model } = require('sequelize');

const PHOTO_TABLE = 'photo';

const PhotoSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  likes: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}

class Photo extends Model {

  static config(sequelize) {
    return {
      sequelize,
      tableName: PHOTO_TABLE,
      modelName: 'Photo',
      timestamps: false
    }
  }
}

module.exports = { PHOTO_TABLE, PhotoSchema, Photo }
