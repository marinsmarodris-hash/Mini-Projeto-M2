import express from 'express';
import sequelize from './config/sequelize.js';
import musicaRouter from './routes/musicaRoutes.js';

const app = express();
const port = 3000;

// Middleware para receber JSON
app.use(express.json());

// Rotas principais
app.use('/api', musicaRouter);

// Rota raiz
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Conexão com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Banco de dados conectado com Sequelize!');
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });
