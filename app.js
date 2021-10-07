require("dotenv").config();
const { request } = require("express");
const express = require("express");
const cors = require("cors");

const app = express();

//middlewares gerais
app.use(express.json());
app.use(cors());

//connect to database
require("./config/db.config");

app.post("/cadastro/empresa", (request, response) => {
  //criar uma nova empresa no DB
  //retornar json da empresa criada
});

app.listen(process.env.PORT, () =>
  console.log(`Server listen on Port ${process.env.PORT}`)
);
