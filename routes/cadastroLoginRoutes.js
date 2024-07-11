import express from 'express';
import Voluntario from '../models/voluntario.js';
import authMiddleware from '../middlewares/auth.js';
//const Voluntario = db.voluntario;

const router = express.Router();

router.get('/', (req, res) => {
  res.send('partials/cadastroLogin');
});

// Rota para processar o cadastro de usuário
router.post('/cadastro', (req, res) => {
  const { nome,sobrenome, email, senha, dataCriacao, endereco, data_nascimento,telefone, profissao } = req.body;

  // Crie um novo usuário no banco de dados
  Voluntario.create({
      nome: `${nome} ${sobrenome}`,
      email: email,
      senha: senha,
      telefone:telefone,
      data_criacao: dataCriacao,
      endereco: endereco,
      data_nascimento: data_nascimento,
      profissao: profissao
      // Adicione outros campos conforme necessário
  })
  .then(usuario => {
      res.status(201).send('Usuário cadastrado com sucesso!');
  })
  .catch(err => {
      res.status(500).send({ message: err.message });
  });
});

router.put('/AtualizarVoluntario/:id_voluntario', authMiddleware, async (req, res) => {
    let id_voluntario = req.params.id_voluntario;

    try{
        await Voluntario.update(req.body, {
            where: {
                id: id_voluntario
            }
        })
        
        res.status(201).json();
    }
    catch (e){
        console.log(e)
    }
});


router.get('/BuscarVoluntarioPorId/:id_voluntario', authMiddleware, async (req, res) => {
    let id_voluntario = req.params.id_voluntario;
    console.log(id_voluntario)

    try{
        let vol = await Voluntario.findByPk(id_voluntario)
        
        console.log(vol)
        res.status(201).json(vol);
    }
    catch (e){
        console.log(e)
    }
});

router.post('/', authMiddleware, (req, res) => {
    res.status(200).json(
    )
});

// Rota para processar o login de usuário (exemplo simples)
/*router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  // Verifique no banco de dados se o usuário existe
  Voluntario.findOne({
      where: {
          email: email,
          senha: senha
      }
  })
  .then(voluntario => {
      if (!voluntario) {
          res.status(404).send('Usuário não encontrado.');
      } else {
          res.status(200).send('Login bem-sucedido!');
          // Aqui você pode redirecionar o usuário ou fazer outras operações
      }
  })
  .catch(err => {
      res.status(500).send({ message: err.message });
  });
});
*/
export default router;