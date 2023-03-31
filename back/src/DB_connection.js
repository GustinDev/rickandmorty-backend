require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const CharacterModel = require('./models/Character');

/* Nos conectamos a la DB, le pasamos la info del .env mediante la URL*/
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  { logging: false, native: false }
);

/* Le pasamos el modelo */

CharacterModel(sequelize);
module.exports = {
  ...sequelize.models,
  sequelize,
};
