const { Character } = require('../DB_connection');

//Routes nos ejecuta y nos pasa :ID.
//Usamos findOne para encontrar un objeto donde su id sea :ID
//Devolvemos ese objeto, routes lo toma y lo hace JSON (linkeado a la URL).
const getCharDetail = async (id) => {
  try {
    const charDetail = await Character.findOne({ where: { id } });
    return charDetail;
  } catch (error) {
    return { error: error.message };
  }
};

//En controllers se maneja la lógica, manejamos el request:
// const axios = require('axios');

// Le damos la URL de donde sacar la información. Async Await Function.
// const URL = 'https://rickandmortyapi.com/api/character/';

// const getCharDetail = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const response = await axios(URL + id);
//     let charDet = {
//       image: response.data.image,
//       name: response.data.name,
//       gender: response.data.gender,
//       status: response.data.status,
//       origin: response.data.origin,
//       species: response.data.species,
//       id: response.data.id,
//       location: response.data.location,
//     };
//     return res.status(200).json(charDet);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// };

module.exports = getCharDetail;
