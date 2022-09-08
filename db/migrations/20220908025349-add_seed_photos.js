const { PHOTO_TABLE, PhotoSchema } = require('../models/photo.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(PHOTO_TABLE, [
      {
        "id": 0,
        "categoryId": 2,
        "image": "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png",
        "likes": 7
      },
      {
        "id": 1,
        "categoryId": 1,
        "image": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 45
      },
      {
        "id": 15,
        "categoryId": 4,
        "image": "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 1
      },
      {
        "id": 18,
        "categoryId": 5,
        "image": "https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 15
      },
      {
        "id": 16,
        "categoryId": 4,
        "image": "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 1
      },
      {
        "id": 7,
        "categoryId": 2,
        "image": "https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 40
      },
      {
        "id": 12,
        "categoryId": 3,
        "image": "https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 6
      },
      {
        "id": 13,
        "categoryId": 1,
        "image": "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 7
      },
      {
        "id": 11,
        "categoryId": 3,
        "image": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 40
      },
      {
        "id": 5,
        "categoryId": 2,
        "image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 0
      },
      {
        "id": 2,
        "categoryId": 1,
        "image": "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 3
      },
      {
        "id": 9,
        "categoryId": 2,
        "image": "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 0
      },
      {
        "id": 8,
        "categoryId": 2,
        "image": "https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 0
      },
      {
        "id": 3,
        "categoryId": 1,
        "image": "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 7
      },
      {
        "id": 19,
        "categoryId": 6,
        "image": "https://images.unsplash.com/photo-1531523668299-e20047c89111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 0
      },
      {
        "id": 4,
        "categoryId": 2,
        "image": "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 27
      },
      {
        "id": 10,
        "categoryId": 3,
        "image": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 0
      },
      {
        "id": 17,
        "categoryId": 5,
        "image": "https://images.unsplash.com/photo-1515619363794-e826f7de3487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 21
      },
      {
        "id": 6,
        "categoryId": 2,
        "image": "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 0
      },
      {
        "id": 20,
        "categoryId": 6,
        "image": "https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 0
      },
      {
        "id": 14,
        "categoryId": 2,
        "image": "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "likes": 27
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(PhotoSchema, null, {});
  }
};



