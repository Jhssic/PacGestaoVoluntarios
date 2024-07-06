import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do motor de templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para processar JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/', routes);

app.get('/perfil/:id', async (req, res) => {
  const voluntarioId = req.params.id;

  try {
      const voluntario = await Voluntario.findByPk(voluntarioId);

      if (!voluntario) {
          return res.status(404).send('Voluntário não encontrado.');
      }

      const eventosInscritos = await voluntario.getEventosInscritos();

      // Renderiza a página do perfil do voluntário, passando eventosInscritos para o template
      res.render('perfil', { voluntario, eventosInscritos });

  } catch (error) {
      console.error('Erro ao carregar perfil do voluntário:', error);
      res.status(500).send('Erro interno ao carregar perfil do voluntário.');
  }
});


// Inicia o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
