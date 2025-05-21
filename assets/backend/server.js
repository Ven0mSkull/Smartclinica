const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.get('/triagens', async (req, res) => {
  const triagens = await prisma.triagem.findMany();
  res.json(triagens);
});

app.post('/triagens', async (req, res) => {
  const { nome, sintomas, urgencia } = req.body;
  const triagem = await prisma.triagem.create({
    data: { 
      nome, 
      sintomas, 
      urgencia 
    },
  });
  res.json(triagem);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));