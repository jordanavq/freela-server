const { Router } = require("express");

const UserCandidate = require("../models/Candidate.model");

const router = Router();

// CRUD

//Atualizar cadastro

router.put("/editar/:candidatoId", async (req, res) => {
  const { candidatoId } = req.params;

  try {
    const candidate = await UserCandidate.findByIdAndUpdate(
      candidatoId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(candidate);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to update a profile", error });
  }
});

//Deletar um candidato
router.delete("/deletar/:candidatoId", async (req, res) => {
  const { candidatoId } = req.params;
  try {
    await UserCandidate.findByIdAndDelete(candidatoId);
    res.status(200).json({ message: "Profile deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to delete a profile", error });
  }
});

//buscar um candidato especifico
router.get("/:candidatoId", async (req, res) => {
  const { candidatoId } = req.params;
  // console.log("------", candidatoId);
  try {
    const candidate = await UserCandidate.findById(candidatoId, { senha: 0 });
    res.status(200).json(candidate);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to get specific candidate", error });
  }
});

module.exports = router;
