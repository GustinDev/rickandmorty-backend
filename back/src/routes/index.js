const { Router } = require('express');
const router = Router();
const getCharDetail = require('../controllers/getCharDetail');

//Aqui anejamos la url y ejecutamos el controller correspondiente.
//Hola
//Nos encargamos de gestionar las peticiones de que hacen los controllers.
//Cuando la url sea detail/:id, se ejecuta la función siguiente.

router.get('/detail/:id', getCharDetail);

module.exports = router;
