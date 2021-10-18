const controllerMessage = require("../controllers/connectionController");

const express = require("express");
const router = express.Router();

router.get("/", controllerMessage.allMessage);
router.get("/search/:id", controllerMessage.searchMessage);

module.exports = router;
