const { Schema, model } = require("mongoose");

const vacancySchema = new Schema(
  {
    dias_da_semana: { type: String, require: true },
    horario: { type: String, require: true },
    cargo: { type: String, require: true },
    diaria: { type: Number, require: true },
    traje: { type: String, require: true },
    fornece_refeicao: { type: Boolean, require: true },
    endereco: { type: String, require: true },
    cidade: { type: String, require: true },
    estado: { type: String, require: true },
    empresa: { type: Schema.Types.ObjectId, ref: "UserCompany" },
    candidatos: [{ type: Schema.Types.ObjectId, ref: "UserCandidate" }],
  },

  {
    timestamps: true,
  }
);

module.exports = model("UserVacancy", vacancySchema);
