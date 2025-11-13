import Musica from '../models/Musica.js';

const criarMusica = async (req, res) => {
  try {
    const { nome, ano, genero } = req.body;

    if (!nome || !ano) {
      return res.status(400).json({ erro: 'Nome e ano são obrigatórios.' });
    }

    const novaMusica = await Musica.create({ nome, ano, genero });
    res.status(201).json(novaMusica);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar música: ' + error.message });
  }
};

const listarMusicas = async (req, res) => {
  try {
    const musicas = await Musica.findAll();
    res.status(200).json(musicas);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar músicas: ' + error.message });
  }
};

export { criarMusica, listarMusicas };
