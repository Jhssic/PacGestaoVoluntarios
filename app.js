import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import routes from './routes/routes.js';
import Voluntario from './models/voluntario.js';
import eventosRoutes from './routes/eventosRoutes.js';
import Evento from './models/evento.js';
import session from 'express-session';
// Importar as rotas de cadastro e login
import cadastroLoginRoutes from './routes/cadastroLoginRoutes.js';
import loginRoutes from './routes/loginRoutes.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Configurações de Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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
app.use('/auth', cadastroLoginRoutes);
app.use('/auth', loginRoutes);
app.use('/eventos', eventosRoutes)

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

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

// Rota para tratar o envio do formulário de cadastro
app.post('/cadastro', async (req, res) => {
  const { nome, sobrenome, email, senha, telefone, data_nascimento, endereco } = req.body;

  try {
    // Inserir dados no banco de dados
    const novoVoluntario = await Voluntario.create({
      nome: `${nome} ${sobrenome}`,
      email,
      telefone,
      data_nascimento,
      endereco,
      senha
    });

    res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
  } catch (err) {
    console.error('Erro ao inserir dados no banco de dados:', err);
    res.status(500).json({ message: 'Erro ao cadastrar voluntário' });
  }
});


// rota de logout 
app.post('/auth/logout', (req, res) => {
  req.session.destroy(err => {
      if (err) {
          return res.status(500).send('Não foi possível encerrar a sessão.');
      }
      res.clearCookie('connect.sid'); // Limpa o cookie da sessão
      res.redirect('/login'); // Redireciona para a página de login
  });
  res.status(200).send('Logout realizado com sucesso.');
});


app.post('/salvarEvento', async (req, res) => {
  try {
    const { nome, descricao, data, local } = req.body; 
    const novoEvento = await Evento.create({
      nome,
      descricao,
      data,
      local
    });
    res.status(201).json({ novoEvento });
  } catch (error) {
    console.error('Erro ao salvar evento:', error);
    res.status(500).json({ error: 'Erro ao salvar evento' });
  }
});

app.post('/evento/criar', async (req, res) => {
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

app.get('*', (req, res) => {
  res.render('partials/login')
});

// Inicia o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



