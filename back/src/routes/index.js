const { Router } = require('express');
const router = Router();
const getCharDetail = require('../controllers/getCharDetail');
const getAllChars = require('../controllers/getAllChars');

//Aqui anejamos la url y ejecutamos el controller correspondiente.
//Nos encargamos de gestionar las peticiones de que hacen los controllers.
//Cuando la url sea detail/:id, se ejecuta la función siguiente.

//GET - ALLCHARACTERS

router.get('/allCharacters', async (req, res) => {
  try {
    const allCharacters = await getAllChars();
    return res.status(200).json(allCharacters);
  } catch (error) {
    return res.status(400).send('Hubo un problema...');
  }
});

// router.get('/detail/:id', getCharDetail);

//GET - CHARACTER:ID
//Se ejecuta cuando el cliente usa la url, front hace una petición.
router.get('/detail/:id', async (req, res) => {
  try {
    //Express recibe el :ID (es un parámetro dinámico) y lo guarda en params.id
    const characterId = req.params.id;
    //Ejecutamos el controller con el ID que recibimos. La respuesta del controller la guardamos en characterDetails.
    const characterDetails = await getCharDetail(characterId);
    if (characterDetails.error) {
      return res.status(404).send(characterDetails.error);
    }
    //Retornamos el objeto JSON linkeado a la URL para que React lo tome y lo muestre.
    return res.status(200).json(characterDetails);
  } catch (error) {
    return res.status(400).send('Hubo un problema...');
  }
});

module.exports = router;
