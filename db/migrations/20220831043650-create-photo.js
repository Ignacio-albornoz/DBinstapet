const {PhotoSchema, PHOTO_TABLE} = require('../models/photo.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PhotoSchema, PHOTO_TABLE);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PHOTO_TABLE);
  }
};
