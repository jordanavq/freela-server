 const {Schema, model} = require('mongoose');

const empresaSchema = new Schema({
    empresa: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    },
    {
    timestamps:true,
    }
); 