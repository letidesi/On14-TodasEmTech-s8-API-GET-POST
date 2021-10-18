const connectionJson = require("../models/connection.json");

const searchMessage = (request, response) => {
  const idRequest = request.params.id;
  let idFound = connectionJson.find((msg) => msg.id == idRequest);
  response.status(200).send(idFound);
};

const allMessage = (request, response) => {
  response.status(200).send(connectionJson);
};

module.exports = {
  searchMessage,
  allMessage,
};
