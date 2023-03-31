const { Router } = require('express');
const router = Router();
const getCharDetail = require('../controllers/getCharDetail');
const getAllChars = require('../controllers/getAllChars');

//Aqui anejamos la url y ejecutamos el controller correspondiente.
//Nos encargamos de gestionar las peticiones de que hacen los controllers.
//Cuando la url sea detail/:id, se ejecuta la función siguiente.

router.get('/allCharacters', async (req, res) => {
  try {
    const allCharacters = await getAllChars();
    return res.status(200).json(allCharacters);
  } catch (error) {
    return res.status(400).send('Hubo un problema...');
  }
});

router.get('/detail/:id', getCharDetail);

module.exports = router;
