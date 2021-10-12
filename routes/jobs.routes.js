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
    res
      .status(500)
      .json({ message: "Error trying to create a vacancy", error });
  }
});

module.exports = router;
