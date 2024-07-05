import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('partials/login');
});

export default router;