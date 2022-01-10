const { request } = require('express');

const equipesController = require('./equipesController');
const usuariosController = require('./usuariosController');

module.exports = {
  equipes: equipesController,
  usuarios: usuariosController,
};
