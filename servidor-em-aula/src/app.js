const express = require("express");
const cors = require("cors");
const moviesRoutes = require("./routes/filmesRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRoutes);

module.exports = app;