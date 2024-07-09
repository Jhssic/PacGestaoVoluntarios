import express from 'express';
import Voluntario from '../models/voluntario'; 
import authMiddleware from '../middlewares/auth';

const router = express.Router();

// Rota para o dashboard do admin
/*router.get('/Voluntarios', authMiddleware, async (req, res) => {
  if (!req.isAdmin) {
    return res.status(403).json({ error: 'Acesso negado' });
  }

  try {
    const voluntarios = await Voluntario.findAll();
    res.render('voluntarios', { voluntarios });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar informações dos voluntários' });
  }
});
*/
export default router;
