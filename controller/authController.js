import jwt from 'jsonwebtoken';
import Voluntario from '../models/voluntario.js';

const authController = {

  login: async (req, res) => {
    try {
      const { email, senha } = req.body;
      console.log(email + " " + senha)
      const voluntario = await Voluntario.findOne({ where: { email, senha } });
      if (!voluntario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      const token = jwt.sign({ userId: voluntario.id }, process.env.JWT_SECRET, { expiresIn: 500 });
      req.session.token = token
      req.session.isAdmin = voluntario.isAdmin
      console.log(voluntario)
      res.json({ token });
    } catch (err) {
        console.log(err)
      res.status(500).json({ error: err.message });
    }
  },

logout: async (req, res) => {
    try {
      req.session.destroy()
      res.redirect('/partials/login')
    } catch (err) {
        console.log(err)
      res.status(500).json({ error: err.message });
    }
  }
};

export default authController;
