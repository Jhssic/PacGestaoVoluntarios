import express from 'express';
import authController from '../controller/authController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('partials/agenda');
});

export default router;