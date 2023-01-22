const express = require("express");
const path = require('path');

const routes = require("./routes");

require('./database/connection');

const app = express();
app.use(express.json());

app.use(routes)

const servidor = 3333

app.listen(servidor, console.log(`servidor rodando na porta ${servidor}`));