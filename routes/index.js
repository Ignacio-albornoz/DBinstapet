const express = require('express');

const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const photoRouter = require('./photo.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/photos', photoRouter);
}

module.exports = routerApi;
