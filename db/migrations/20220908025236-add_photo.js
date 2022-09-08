const { PHOTO_TABLE, PhotoSchema } = require('../models/photo.model')

module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable( PHOTO_TABLE, PhotoSchema );

  },

  async down (queryInterface) {

    await queryInterface.dropTable(PHOTO_TABLE);
    
  }
};
