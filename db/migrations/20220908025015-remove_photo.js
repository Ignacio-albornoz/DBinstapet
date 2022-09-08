const { PHOTO_TABLE, PhotoSchema } = require('../models/photo.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.dropTable(PHOTO_TABLE);
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable(PHOTO_TABLE);
    
  }
};
