//Requerimos express (server) - Decimos el puerto.
const PORT = 3001;
const server = require('./App');

//DB
const { sequelize } = require('./DB_connection');
const { saveApiData } = require('./controllers/saveApiData');

//Sincronizamos la DB (le pasamos el API y que cree los datos allá):
//Levantamos el server  y confirmamos el puerto.
sequelize.sync({ force: true }).then(async () => {
  console.log('DB conectada, master');
  await saveApiData();
  server.listen(3001, () => {
    console.log('Server raised in port: 3001');
  });
});
