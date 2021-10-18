const moviesJson = require("../models/ghibli.json");

const getMessage = (request, response) => {
  response.status(200).send([
    {
      message: "API de filmes Ghibli da turma On14.",
    },
  ]);
};
const getAll = (request, response) => {
  response.status(200).send(moviesJson);
};

const getTitle = (request, response) => {
  let titleRequest = request.query.title.toLocaleLowerCase();
  let titleFound = moviesJson.filter((movies) =>
    movies.title.toLocaleLowerCase().includes(titleRequest)
  );
  response.status(200).send(titleFound);
};

const createMovies = (request, response) => {
  let titleRequest = request.body.title;
  let descriptionRequest = request.body.description;

  let newMovie = {
    id: moviesJson.length + 1,
    title: titleRequest,
    description: descriptionRequest,
  };
  moviesJson.push(newMovie);

  response.status(201).json([
    {
      message: "Filme cadastrado com sucesso!",
      newMovie,
    },
  ]);
};

const getById = (request, response) => {
  const idRequest = request.params.id;
  let moviesFound = moviesJson.find((movies) => movies.id == idRequest);
  response.status(200).send(moviesFound);
};

module.exports = {
  getMessage,
  getAll,
  getTitle,
  createMovies,
  getById,
};
