import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('partials/conta');
});

// Rota para logout
router.post('/logout', (req, res) => {
  localStorage.removeItem('jwt');
  res.redirect('partials/login');
});

export default router;