//Levantamos el servidor local - Decimos el puerto.
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3001;

//Linkeamos el server con las rutas.
const router = require('./routes');
//Le damos la URL
server.use('/rickandmorty', router);

//Confirmamos el puerto.

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
