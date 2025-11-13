const express = require('express');
const mongoose = require('mongoose');
const musicaRouter = require('./routes/musicaRoutes');

const app = express();
const port = 3000;

// Middleware para receber JSON
app.use(express.json());

// Rotas
app.use('/api', musicaRouter);

// Rota raiz para teste
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Conexão com MongoDB Atlas
mongoose.connect(
  'mongodb+srv://marinsmarodris_db_user:Halloween123@cluster0.cjki31e.mongodb.net/meuBanco?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
  console.log('MongoDB conectado!');
  app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
})
.catch(err => console.log('Erro ao conectar no MongoDB:', err));
