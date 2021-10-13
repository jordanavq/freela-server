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

//Criar nova candidatura

router.post("/candidatura/:vagaId", async (req, res) => {
  const { vagaId } = req.params;
  try {
    //projeção de objeto
    // const job = await UserJob.findById(vagaId, { funcao:1, cidade:1, estado:1 , _id:0 });
    const job = await UserJob.findById(vagaId);
    job.candidatosId.push(req.user.id);
    job.save();
    res.status(200).json({ message: "Application sent" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to sent a application", error });
  }
});

//Buscar vagas que o candidato está inscrito
router.get("/:candidatoId", async (req, res) => {
  const { candidatoId } = req.params;
  try {
    const applications = await UserJob.find({
      candidatosId: { $in: candidatoId },
    });
    res.status(200).json(applications);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to get all applicantions", error });
  }
});

//Buscar dentro da vaga publicada quais candidatos estão inscritos
router.get("/candidaturas/:empresaId", async (req, res) => {
  const { empresaId } = req.params;

  try {
    const applications = await UserJob.find({
      empresaId: empresaId,
    });
    res.status(200).json(applications);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error trying to get all candidates", error });
  }
});

module.exports = router;
