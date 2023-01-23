const express = require("express");
const path = require('path');

const routes = require("./routes/usuarioRoutes");
const enderecosRoutes = require("./routes/enderecoRoutes")

require('./database/connection');

const app = express();
app.use(express.json());

app.use(routes);
app.use(enderecosRoutes);

const servidor = 3333

app.listen(servidor, console.log(`servidor rodando na porta ${servidor}`));