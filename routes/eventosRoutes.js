import express from 'express';
import Evento from '../models/evento.js';
import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

router.post('/criar', async (req, res) => {
  try {
    const evento = await Evento.create({
      nome: req.body.nome,
      descricao: req.body.descricao,
      data: req.body.data,
      local: req.body.local,
    });
    res.status(201).send(evento);
  } catch (error) {
    console.error("Erro ao criar evento:", error);
    res.status(500).send("Erro ao criar evento");
  }
});

router.get('/eventos', authMiddleware, (req, res) => {
  // Renderiza a página eventos e passa isAdmin apenas se for administrador
  res.render('eventos', { isAdmin: req.session.isAdmin });
});

export default router;