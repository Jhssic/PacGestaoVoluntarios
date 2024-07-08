import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import routes from './routes/routes.js';
import Voluntario from './models/voluntario.js';
import Participacao from './models/participacao.js';
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

/*sequelize.sync({ force: false }) // Se force for true, ele irá apagar e recriar as tabelas
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar modelos:', err);
  });
*/

// Inicia o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



