const express = require("express");
const cors = require("cors");
const connectionRoutes = require("./routes/connectionRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/connect", connectionRoutes);

module.exports = app;
