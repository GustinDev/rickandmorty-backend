const { Character } = require('../DB_connection');

//Find all es de SQLZ, trae todos los objetos.

const getAllChars = async () => {
  try {
    const allCharacters = await Character.findAll();
    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getAllChars;
