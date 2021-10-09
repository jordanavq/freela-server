const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

router.post("/empresa/entrar", async (req, res) => {
  const { email, senha } = req.body;
  try {
    if (!email || !senha) {
      throw new Error("Missing email or senha");
    }
    const user = await UserCompany.findOne({ email });
    if (!user) {
      throw new Error("Wrong email or senha");
    }

    const validation = bcrypt.compareSync(senha, user.senha);

    if (validation) {
      const payload = {
        id: user._id,
        email: user.email,
        empresa: user.empresa,
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
