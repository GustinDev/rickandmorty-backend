//En controllers se maneja la lógica, manejamos el request:
const axios = require('axios');

//Le damos la URL de donde sacar la información. Async Await Function.
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios(URL + id);
    let charDet = {
      image: response.data.image,
      name: response.data.name,
      gender: response.data.gender,
      status: response.data.status,
      origin: response.data.origin,
      species: response.data.species,
      id: response.data.id,
      location: response.data.location,
    };
    return res.status(200).json(charDet);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = getCharDetail;
