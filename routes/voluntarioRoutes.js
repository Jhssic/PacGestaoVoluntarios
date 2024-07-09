import express from 'express';
//import Voluntario from '../models/voluntario';
const router = express.Router();

/*router.get('/', (req, res) => {
  res.send('partials/controleVoluntario');
});
*/
router.get('/voluntarios', async (req, res) => {
  try {
    const voluntarios = await voluntarios.findAll();
    res.render('partials/controleVoluntario', { voluntarios });
  } catch (error) {
    console.error('Erro ao buscar voluntários:', error);
    res.status(500).send('Erro ao buscar voluntários');
  }
});

export default router;