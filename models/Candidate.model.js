const { Schema, model } = require("mongoose");

const candidateSchema = new Schema(
  {
    nome_e_sobrenome: { type: String, required: true },
    funcao: { type: String, required: true },
    idade: { type: Number, required: true },
    sexo: { type: String },
    bairro_de_residencia: { type: String },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    possui_meio_de_transporte_proprio: { type: Boolean },
    celular: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

module.exports = model("UserCandidate", candidateSchema);
