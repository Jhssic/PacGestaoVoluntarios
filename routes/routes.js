import express from 'express';
import voluntarioRoutes from './voluntarioRoutes.js';

const router = express.Router();

// rota login
router.get('/login', (req, res) => {
  res.render('partials/login');
});

// Rota Agenda
router.get('/agenda', (req, res) => {
    res.render('partials/agenda');
  });

// Rota cadastroLogin
router.get('/cadastro', (req, res) => {
    res.render('partials/cadastroLogin');
  });

// Rota conta
router.get('/conta', (req, res) => {
    res.render('partials/conta');
  });

// Rota Eventos
router.get('/eventos', (req, res) => {
    res.render('partials/eventos');
  });

// Rota experiencias
router.get('/experiencias', (req, res) => {
    res.render('partials/experiencias');
  });

// Rota graficos
router.get('/graficos', (req, res) => {
    res.render('partials/graficos');
  });

// Rota Eventos
router.get('/eventos', (req, res) => {
    res.render('partials/eventos');
  });

// Rota home
router.get('/home', (req, res) => {
  res.render('partials/home');
});

// Rota Voluntarios ADM
router.get('/voluntarios', (req, res) => {
    res.render('partials/controleVoluntario');
  });

router.use('/voluntarios', voluntarioRoutes);


export default router;
