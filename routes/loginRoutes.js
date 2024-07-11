import express from 'express';
import authController from '../controller/authController.js';
import authMiddleware from '../middlewares/auth.js';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('partials/login');

});

router.post('/login', authController.login);
router.post('/logout', authController.logout);

export default router;