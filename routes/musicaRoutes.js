import express from 'express';
import { criarMusica, listarMusicas } from '../controllers/musicaController.js';

const router = express.Router();

router.post('/musicas', criarMusica);
router.get('/musicas', listarMusicas);

export default router;