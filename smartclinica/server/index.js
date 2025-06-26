const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/smartclinica', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({ message: 'API da SmartClínica funcionando!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});