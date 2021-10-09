const { Schema, model } = require("mongoose");

const candidateSchema = new Schema(
  {
    nome_e_sobrenome: { type: String, require: true },
    funcao: { type: String, require: true },
    idade: { type: Number, require: true },
    sexo: { type: String, require: true },
    bairro_de_residencia: { type: String },
    cidade: { type: String, require: true },
    estado: { type: String, require: true },
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
