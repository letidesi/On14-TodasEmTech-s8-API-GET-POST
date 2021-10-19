const moviesJson = require("../models/ghibli.json");

const getMessage = (request, response) => {
  try {
    response.status(200).send([
      {
        message: "API de filmes Ghibli da turma On14.",
      },
    ]);
  } catch (error) {
    response.status(404).json([
      {
        message: "Não foi possível encontrar esta mensagem.",
      },
    ]);
  }
};

const getAll = (request, response) => {
  try {
    response.status(200).send(moviesJson);
  } catch (error) {
    response.status(404).json([
      {
        message: "Não foi possível encontrar estes filmes.",
      },
    ]);
  }
};

const getTitle = (request, response) => {
  try {
    let titleRequest = request.query.title.toLocaleLowerCase();
    let titleFound = moviesJson.find((movies) =>
      movies.title.toLocaleLowerCase().includes(titleRequest)
    );

    if (titleFound == undefined) {
      response.status(400).json([
        {
          message: "Não foi possível encontrar este título.",
        },
      ]);
    }
    response.status(200).json(titleFound);
  } catch (error) {
    response.status(400).json([
      {
        message: "Error, verifique e tente novamente.",
      },
    ]);
  }
};

const createMovies = (request, response) => {
  try {
    let titleRequest = request.body.title;
    let descriptionRequest = request.body.description;

    let newMovie = {
      id: moviesJson.length + 1,
      title: titleRequest,
      description: descriptionRequest,
    };


    if (newMovie.title == "" || newMovie.description == "") {
      response.status(406).json([
        {
          message: "Por favor, verifique e insira as informações corretamente.",
        },
      ]);
    } else {
      moviesJson.push(newMovie);
    }
    response.status(201).json([
      {
        message: "Filme cadastrado com sucesso!",
        newMovie,
      },
    ]);
  } catch (error) {
    response.status(400).json([
      {
        message: "Error, verifique e tente novamente.",
      },
    ]);
  }
};

const getById = (request, response) => {
  try {
    const idRequest = request.params.id;
    let moviesFound = moviesJson.find((movies) => movies.id == idRequest);

    if (moviesFound == undefined) {
      response.status(404).json([
        {
          message: "Não possível encontrar este id.",
        },
      ]);
    }
    response.status(200).send(moviesFound);
  } catch (error) {
    response.status(400).json([
      {
        message: "Error, verifique e tente novamente.",
      },
    ]);
  }
};

module.exports = {
  getMessage,
  getAll,
  getTitle,
  createMovies,
  getById,
};
