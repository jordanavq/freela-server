const { Router } = require("express");

const Job = require("../models/Job.model");

const router = Router();

//buscar todas as vagas
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error trying to get all jobs", error });
  }
});

//buscar um vaga especifica
router.get("/:vagaId", async (req, res) => {
  const { vagaId } = req.params;

  try {
    const job = await Job.findById(vagaId).populate("empresaId");
    res.status(200).json(job);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to get specific job opening", error });
  }
});

module.exports = router;
