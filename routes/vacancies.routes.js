const { Router } = require("express");

const UserVacancy = require('../models/Vacancy.model');

const router = Router();

// CRUD

//Criar nova vaga 

router.post('/cadastro', async (req, res) =>{ //checar se o caminho esta correto, ":idempresa"
    const {id} = req.user;
    try {
        const vacancy = await UserVacancy.create({...req.body, empresaId:id});
        res.status(201).json(vacancy);
    } catch (error) {
        res.status(500).json({message:'Error trying to create a vacancy', error});
    }
}) 


module.exports = router;
