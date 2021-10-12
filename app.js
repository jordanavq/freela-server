//configurações
require("dotenv").config();
require("./config/db.config");

//pacotes
const { request } = require("express");
const express = require("express");
const cors = require("cors");

const app = express();

//importar middlewares
const authMiddleware = require("./middlewares/auth.middleware");

//middlewares gerais
app.use(express.json());
app.use(cors());

//importar rotas
const authCandidatesRoutes = require("./routes/auth.candidates.routes");
const authCompaniesRoutes = require("./routes/auth.companies.routes");
const jobsRoutes = require("./routes/jobs.routes");
const jobsPublicRoutes = require("./routes/jobs.public.routes");

//const candidatesRoutes = require("./routes/candidates.routes");
//const companiesRoutes = require("./routes/companies.routes");

//rotas públicas - todos os caminhos que o usuário pode percorrer sem estar logado
app.use("/", authCompaniesRoutes);
app.use("/", authCandidatesRoutes);
app.use("/vagas", jobsPublicRoutes);

//middlaware de autenticação
app.use(authMiddleware);

//rotas privadas (criar)
app.use("/vagas", jobsRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server listen on Port ${process.env.PORT}`)
);
