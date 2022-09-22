const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize')


class PhotoService {

  constructor(){
  }
  async create(data) {
    const newPhoto = await models.Photo.create(data);
    return newPhoto;
  }

  async find() {
    const photos = await models.Photo.findAll();
    return photos;
  }

  async findOne(id) {
    const photo = this.Photo.find(item => item.id === id);
    if (!photo) {
      throw boom.notFound('photo not found');
    }
    return photo;
  }

  async update(id, changes) {
    const photo = await this.findOne(id);
    const rta = await photo.update(changes);
    return rta;
  }

  async delete(id) {
    const photo = await this.findOne(id);
    await photo.destroy();
    return { id };
  }

}

module.exports = PhotoService;
