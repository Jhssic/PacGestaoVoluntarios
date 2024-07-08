import express from 'express';
import voluntarioRoutes from './voluntarioRoutes.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// rota login
router.get('/login', (req, res) => {
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
    res.render('partials/eventos');
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
router.get('/eventos', isAuthenticated, (req, res) => {
    res.render('partials/eventos');
  });

// Rota home
router.get('/home', isAuthenticated, (req, res) => {
  res.render('partials/home');
});

// Rota Voluntarios ADM
router.get('/voluntarios', (req, res) => {
    res.render('partials/controleVoluntario');
  });


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

/*router.get('/protected', authMiddleware, (req, res) => {
    res.send('Você está autenticado!!!!!!!!');
});
*/
// Rota perfil do voluntário
//router.get('/perfil/:id', VoluntarioController.getPerfil);


export default router;
