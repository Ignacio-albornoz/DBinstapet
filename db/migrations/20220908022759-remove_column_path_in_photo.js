const { PHOTO_TABLE, PhotoSchema } = require('../models/photo.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      PHOTO_TABLE,
      'path'
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
