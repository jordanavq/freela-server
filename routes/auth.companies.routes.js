const { Router } = require("express");

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
  } catch (error) {}
});

//router.post("/empresa/cadastro", async )

module.exports = router;

//criar rota de login e signup aqui
