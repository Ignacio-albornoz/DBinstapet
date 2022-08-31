const { User, UserSchema } = require('./user.model');
const { Category, CategorySchema } = require('./category.model');
const { Photo, PhotoSchema } = require('./photo.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Photo.init(PhotoSchema, Photo.config(sequelize));
}

module.exports = setupModels;
