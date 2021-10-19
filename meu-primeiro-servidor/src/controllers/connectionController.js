const connectionJson = require("../models/connection.json");

const searchMessage = (request, response) => {
  try {
    const idRequest = request.params.id;

    let idFound = connectionJson.find((msg) => msg.id == idRequest);

    if (idFound == undefined) {
      response.status(404).json([
        {
          message: "Este id não foi encontrado.",
        },
      ]);
    }

    response.status(200).send(idFound);
  } catch (error) {
    response.status(400).json([
      {
        message: "Error.",
      },
    ]);
  }
};

const allMessage = (request, response) => {
  try {
    response.status(200).send(connectionJson);
  } catch (error) {
    response.status(404).json([
      {
        message: "Não foi possível encontrar as mensagens.",
      },
    ]);
  }
};

module.exports = {
  searchMessage,
  allMessage,
};
