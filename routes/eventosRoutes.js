import express from 'express';

const router = express.Router();

router.get('/eventos', authMiddleware, (req, res) => {
  // Renderiza a página eventos e passa isAdmin apenas se for administrador
  res.render('eventos', { isAdmin: req.isAdmin });
});

export default router;