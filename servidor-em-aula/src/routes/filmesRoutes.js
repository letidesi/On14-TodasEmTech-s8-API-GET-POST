const controllerMovies = require("../controllers/filmesController");

const express = require("express");
const router = express.Router();

router.get("/", controllerMovies.getMessage);
router.get("/all", controllerMovies.getAll);
router.get("/filter", controllerMovies.getTitle);
router.post("/create", controllerMovies.createMovies);
router.get("/search/:id", controllerMovies.getById);

module.exports = router;
