import express from 'express';
import jwt from 'jsonwebtoken';
import Evento from '../models/evento.js';
import authMiddleware from '../middlewares/auth.js';
import Voluntario from '../models/voluntario.js';

const router = express.Router();
// rota login
router.get('/login', (req, res) => {
  console.log("ola")
  res.render('partials/login');
});

// Rota Agenda
router.get('/agenda',isAuthenticated, (req, res) => {
    res.render('partials/agenda');
  });

// Rota cadastroLogin
router.get('/cadastro', (req, res) => {
    res.render('partials/cadastroLogin');
  });

// Rota conta
router.get('/conta',isAuthenticated, (req, res) => {
    res.render('partials/conta');
  });

// Rota Eventos
router.get('/eventos', isAuthenticated, (req, res) => {
    console.log(req.session)
    res.render('partials/eventos',{ isAdmin: req.session.isAdmin });
  });

// Rota experiencias
router.get('/experiencias',isAuthenticated, (req, res) => {
    res.render('partials/experiencias');
  });

// Rota graficos
router.get('/graficos', isAuthenticated, (req, res) => {
    res.render('partials/graficos');
  });

// Rota Eventos


// Rota home
router.get('/home', isAuthenticated, (req, res) => {
  res.render('partials/home');
});

// Rota Voluntarios ADM
router.get('/voluntarios', (req, res) => {
    res.render('partials/controleVoluntario');
  });

router.get('/partials/login', (req, res) => {
    res.render('partials/login');
  });

//já está em eventosRoutes
/*router.post('/evento/criar', async (req, res) => {
  try {
    const evento = await Evento.create({
      nome: req.body.nome,
      descricao: req.body.descricao,
      data: req.body.data,
      local: req.body.local,
    });
    res.status(201).send(evento);
  } catch (error) {
    console.error("Erro ao criar evento:", error);
    res.status(500).send("Erro ao criar evento");
  }
  });
*/

function isAuthenticated(req, res, next) {
    if (req.session?.token) {
      try {
        jwt.verify(req.session?.token, process.env.JWT_SECRET);
        next();
      } catch (err) {
        res.redirect('/login');
      }
    } else {
        res.redirect('/login');
    }
}


export default router;
