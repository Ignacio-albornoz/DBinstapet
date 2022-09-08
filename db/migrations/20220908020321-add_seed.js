const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model')


module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(CATEGORY_TABLE, [
          {
            "id": 1,
            "name": "cats",
            "image": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg",
            "path": "/photos/cats"
          },
          {
            "id": 2,
            "name": "dogs",
            "image": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg",
            "path": "/photos/dogs"
          },
          {
            "id": 3,
            "name": "hamsters",
            "image": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg",
            "path": "/photos/hamsters"
          },
          {
            "id": 4,
            "name": "rabbits",
            "image": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg",
            "path": "/photos/rabbits"
          },
          {
            "id": 5,
            "name": "birds",
            "image": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_birds.jpg",
            "path": "/photos/birds"
          },
          {
            "id": 6,
            "name": "fishes",
            "image": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_fishes.jpg",
            "path": "/photos/fishes"
          }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(CategorySchema, null, {});
  }
};
