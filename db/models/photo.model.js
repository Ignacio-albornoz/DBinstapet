const { DataTypes, Sequelize } = require('sequelize');

const PHOTO_TABLE = 'photo';

const PhotoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
  },
  likes: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  path:{
    allowNull: false,
    type: DataTypes.STRING,
  }
}


module.exports = { PHOTO_TABLE, PhotoSchema }
