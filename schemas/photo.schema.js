const Joi = require('joi');

const id = Joi.number().integer();
const category_id = Joi.number().integer();
const likes = Joi.number().integer();
const image = Joi.string().uri();
const path = Joi.string().min(3);

const createPhotoSchema = Joi.object({
  category_id: category_id.required(),
  image: image.required(),
  path: path.required()
});

const updatePhotoSchema = Joi.object({
  category_id: category_id,
  image: image,
});

const getPhotoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPhotoSchema, updatePhotoSchema, getPhotoSchema }
