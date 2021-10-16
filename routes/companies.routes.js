const { Router } = require("express");

const Company = require("../models/Company.model");

const router = Router();

//buscar todos os candidatos
router.get("/all", async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to get all companies", error });
  }
});

//buscar um candidato especifico
router.get("/:empresaId", async (req, res) => {
  const { empresaId } = req.params;

  try {
    const company = await Company.findById(empresaId);
    res.status(200).json(company);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to get specific company", error });
  }
});

module.exports = router;
