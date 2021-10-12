const { Schema, model } = require("mongoose");

const jobSchema = new Schema(
  {
    data: { type: String, required: true },
    horario: { type: String, required: true },
    funcao: { type: String, required: true },
    diaria: { type: String, required: true },
    traje: { type: String, required: true },
    fornece_refeicao: { type: Boolean, required: true },
    endereco: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    empresaId: { type: Schema.Types.ObjectId, ref: "UserCompany" },
    candidatosId: [{ type: Schema.Types.ObjectId, ref: "UserCandidate" }],
  },

  {
    timestamps: true,
  }
);

module.exports = model("UserJob", jobSchema);
