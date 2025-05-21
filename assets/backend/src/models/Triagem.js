const mongoose = require('mongoose');

const TriagemSchema = new mongoose.Schema({
  nome: String,
  sintomas: String,
  urgencia: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Triagem', TriagemSchema);