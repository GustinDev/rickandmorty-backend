const axios = require('axios');

//Tomamos el Modelos de Models.
const { Character } = require('../DB_connection');

//../models/Character

//Traemos los datos y hacemos el paginado, mediante un while, cada pagina trae 20, queremos 100. Modificamos la url para acceder a cada pagina.

const getApiData = async () => {
  try {
    let i = 1;
    let characters = [];

    while (i < 6) {
      let apiData = await axios(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );

      characters.push(apiData);
      i++;
    }

    //Esperamos la info de todos las páginas, para asi entrar a results (de las api pages) y mapear a cada uno de los personajes que contiene.
    //Data es lo que nos da axios.

    characters = (await Promise.all(characters)).map((res) =>
      res.data.results.map((char) => {
        return {
          //Las propiedades son las que uno plantea en el modelo.
          id: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          gender: char.gender,
          origin: char.origin.name,
          image: char.image,
        };
      })
    );

    //Concatenamos los array, para solo tener uno al final:
    let allCharacters = [];
    characters.map((char) => {
      allCharacters = allCharacters.concat(char);
    });
    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

//Sirve para guardar los personajes de nuestra API en la DB.

//Usamos bulkCreate(), le pasamos un array de objetos y los crea dentro de la DB.

const saveApiData = async () => {
  try {
    const allCharacters = await getApiData();
    await Character.bulkCreate(allCharacters);
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  saveApiData,
};
