//configurações
require("dotenv").config();
require("./config/db.config");

//pacotes
const { request } = require("express");
const express = require("express");
const cors = require("cors");

const app = express();

//middlewares gerais
app.use(express.json());
app.use(cors());

//importar rotas
const authCandidatesRoutes = require("./routes/auth.candidates.routes");
const authCompaniesRoutes = require("./routes/auth.companies.routes");
//const candidatesRoutes = require("./routes/candidates.routes");
//const companiesRoutes = require("./routes/companies.routes");
//const vacanciesRoutes = require("./routes/vacancies.routes");

//rotas
app.use('/cadastro/empresa', authCompaniesRoutes);
app.use('/cadastro/candidato', authCandidatesRoutes);

app.post("/cadastro/empresa", (request, response) => {
  //criar uma nova empresa no DB
  //retornar json da empresa criada
});

app.listen(process.env.PORT, () =>
  console.log(`Server listen on Port ${process.env.PORT}`)
);
