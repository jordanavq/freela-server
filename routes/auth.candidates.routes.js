const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserCandidate = require("../models/Candidate.model");

const router = Router();

//signup-cadastro
router.post("/candidato/cadastro", async (req, res) => {
  const {
    nome_e_sobrenome,
    funcao,
    idade,
    sexo,
    bairro_de_residencia,
    cidade,
    estado,
    possui_meio_de_transporte_proprio,
    celular,
    email,
    senha,
  } = req.body;

  try {
    if (
      !nome_e_sobrenome ||
      !funcao ||
      !idade ||
      !sexo ||
      !cidade ||
      !estado ||
      !celular ||
      !email ||
      !senha
    ) {
      throw new Error(
        "Missing funcao or idade or sexo or cidade or estado or celular or email or senha"
      );
    }
    const user = await UserCandidate.findOne({ email });
    if (!!user) {
      throw new Error("email already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(senha, salt);
    await UserCandidate.create({
      nome_e_sobrenome,
      funcao,
      idade,
      sexo,
      bairro_de_residencia,
      cidade,
      estado,
      possui_meio_de_transporte_proprio,
      celular,
      email,
      senha: passwordHash,
    });

    res.status(201).json({ message: `Created user: ${email}` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to create user", error: error.message });
  }
});

//login

router.post("/candidato/entrar", async (req, res) => {
  const { email, senha } = req.body;
  try {
    if (!email || !senha) {
      throw new Error("Missing email or senha");
    }
    const user = await UserCandidate.findOne({ email });
    if (!user) {
      throw new Error("Wrong email or senha");
    }

    const validation = bcrypt.compareSync(senha, user.senha);

    if (validation) {
      const payload = {
        id: user._id,
        email: user.email,
        nome_e_sobrenome: user.nome_e_sobrenome,
      };
      const token = jwt.sign(payload, process.env.SECRET_JWT, {
        expiresIn: "1day",
      });
      res.status(200).json({ user: payload, token });
      return;
    }
    throw new Error("Wrong email or senha");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to login", error: error.message });
  }
});

module.exports = router;
