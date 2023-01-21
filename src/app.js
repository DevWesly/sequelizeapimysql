const express = require("express");
const routes = require("./routes");


const app = express();
app.use(express.json());

app.use(routes)


const servidor = 3333

app.listen(servidor, console.log(`servidor rodando na porta ${servidor}`));