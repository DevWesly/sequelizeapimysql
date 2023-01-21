const express = require("express");

const app = express();

const servidor = 3333

app.listen(servidor, console.log(`servidor rodando na porta ${servidor}`));