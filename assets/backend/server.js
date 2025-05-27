const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();

const prisma = new PrismaClient();

app.use(express.json());

// Log para verificar se o Prisma está conectado
console.log('Tentando conectar ao Prisma...');
prisma.$connect()
  .then(() => console.log('Conexão com Prisma estabelecida!'))
  .catch((err) => console.error('Erro na conexão com Prisma:', err));

app.get('/triagens', async (req, res) => {
  console.log('Recebida requisição GET /triagens');
  try {
    const triagens = await prisma.triagem.findMany();
    console.log('Triagens encontradas:', triagens);
    res.json(triagens);
  } catch (err) {
    console.error('Erro no GET /triagens:', err);
    res.status(500).json({ error: 'Erro ao buscar triagens' });
  }
});

app.post('/triagens', async (req, res) => {
  console.log('Recebida requisição POST /triagens', req.body);
  try {
    const { nome, sintomas, urgencia } = req.body;
    const triagem = await prisma.triagem.create({
      data: { nome, sintomas, urgencia },
    });
    const respostaIA = sintomas.includes('febre') ? 'Urgência: Média' : 'Urgência: Baixa';
    console.log('Triagem criada:', triagem);
    res.json({ ...triagem, respostaIA });
  } catch (err) {
    console.error('Erro no POST /triagens:', err);
    res.status(500).json({ error: 'Erro ao criar triagem' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));