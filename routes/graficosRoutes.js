import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('partials/graficos');
});

export default router;