const { Router } = require("express");

const Candidate = require("../models/Candidate.model");

const router = Router();

//buscar todos os candidatos
router.get("/", async (req, res) => {
  try {
    const candidates = await Candidate.find().select({ senha: 0 });
    res.status(200).json(candidates);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to get all candidates", error });
  }
});

module.exports = router;
