const { Router } = require("express");

const Candidate = require("../models/Candidate.model");

const router = Router();

//buscar todos os candidatos
router.get("/", async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to get all candidates", error });
  }
});

//buscar um candidato especifico
router.get("/:candidatoId", async (req, res) => {
  const { candidatoId } = req.params;

  try {
    const candidate = await Candidate.findById(candidatoId);
    res.status(200).json(candidate);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to get specific candidate", error });
  }
});

module.exports = router;
