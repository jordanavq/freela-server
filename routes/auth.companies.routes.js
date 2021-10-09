const { Router } = require("express");
const bcrypt = require("bcryptjs");

const UserCompany = require("../models/Company.model");

const router = Router();

//signup-cadastro
router.post("/empresa/cadastro", async (req, res) => {
  const { empresa, email, senha } = req.body;

  try {
    if (!empresa || !email || !senha) {
      throw new Error("Missing empresa or email or senha");
    }
    const user = await UserCompany.findOne({ email });
    if (!!user) {
      throw new Error("email already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(senha, salt);
    await UserCompany.create({
      empresa,
      email,
      senha,
    });

    res.status(201).json({ message: `Created user: ${email}` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to create user", error: error.message });
  }
});

//router.post("/empresa/cadastro", async )

module.exports = router;

//criar rota de login e signup aqui
