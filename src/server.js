const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRoutes = require("./routes/mainRoutes");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(mainRoutes);

module.exports = server;