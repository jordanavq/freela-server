const { Schema, model } = require("mongoose");

const vacancySchema = new Schema(
  {
    data: { type: String, require: true },
    horario: { type: String, require: true },
    funcao: { type: String, require: true },
    diaria: { type: String, require: true },
    traje: { type: String, require: true },
    fornece_refeicao: { type: Boolean, require: true },
    endereco: { type: String, require: true },
    cidade: { type: String, require: true },
    estado: { type: String, require: true },
    empresaId: { type: Schema.Types.ObjectId, ref: "UserCompany" },
    candidatosId: [{ type: Schema.Types.ObjectId, ref: "UserCandidate" }],
  },

  {
    timestamps: true,
  }
);

module.exports = model("UserVacancy", vacancySchema);
