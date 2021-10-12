const { Router } = require("express");

const UserCandidate = require("../models/Candidate.model");

const router = Router();

// CRUD

//Atualizar cadastro

router.put("/editar/:candidateId", async (req, res) => {
  const { candidateId } = req.params;

  try {
    const candidate = await UserCandidate.findByIdAndUpdate(candidateId, req.body, {
      new: true,
    });
    res.status(200).json(candidate);
  } catch (error) {
    res.status(500).json({ message: "Error trying to update a profile", error });
  }
});

//Deletar uma vaga
router.delete("/deletar/:candidateId", async (req, res) => {
  const { candidateId } = req.params;
  try {
    await UserCandidate.findByIdAndDelete(candidateId);
    res.status(200).json({ message: "Profile deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error trying to delete a profile", error });
  }
});

module.exports = router;