import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('partials/eventos');
});

export default router;