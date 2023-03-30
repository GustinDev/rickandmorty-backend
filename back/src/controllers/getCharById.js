//En controllers se maneja la lógica:
const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = (req, res) => {
  //Sacamos el ID de params
  const { id } = req.params;

  axios.get(`${URL}/character/${id}`).then((response) => {
    const { id, name, species, image, gender } = response.data;
    //Creamos la respuesta.
    res
      .status(200)
      .json({ id, name, species, image, gender })
      .catch(res.status(500).json({ error: error.message }));
  });
};

module.exports = getCharById;
