require("dotenv").config();
const { request } = require("express");
const express = require("express");

//connect to database
require('./config/db.config');

const app = express();

app.post("/cadastro/empresa", (request, response) => {
  //criar uma nova empresa no DB
  

  //retornar json da empresa criada
});


app.listen(process.env.PORT, () =>
  console.log(`Server listen on Port ${process.env.PORT}`)
);
