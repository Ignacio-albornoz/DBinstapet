const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize')


class PhotoService {

  constructor(){
  }
  async create(data) {
    return data;
  }

  async find() {
    const photos = await models.Photo.findAll();
    return photos;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = PhotoService;
