const { Router } = require("express");

const UserJob = require("../models/Job.model");

const router = Router();

// CRUD

//Criar nova vaga

router.post("/cadastro", async (req, res) => {
  const { id } = req.user;
  try {
    const job = await UserJob.create({ ...req.body, empresaId: id });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error trying to create a job", error });
  }
});

//Atualizar vaga
router.put("/editar/:vagaId", async (req, res) => {
  const { vagaId } = req.params;

  try {
    const job = await UserJob.findByIdAndUpdate(vagaId, req.body, {
      new: true,
    });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error trying to update a job", error });
  }
});

//Deletar uma vaga
router.delete("/deletar/:vagaId", async (req, res) => {
  const { vagaId } = req.params;
  try {
    await UserJob.findByIdAndDelete(vagaId);
    res.status(200).json({ message: "Job deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error trying to delete a job", error });
  }
});

module.exports = router;
