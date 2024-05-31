# Projeto de Gestão de Voluntários
Este projeto é uma aplicação web para a gestão de voluntários. A aplicação permite o cadastro de voluntários, gerenciamento de eventos e vinculação de voluntários aos eventos. Utiliza Node.js para o backend e MySQL para o banco de dados.

## Autores
- Jhessica Maria Alves Fernandes
- Engenharia de Software - 3B

## Pré-requisitos
- Node.js instalado
- MySQL instalado e em execução (utilizei o Xampp)
- Insomnia (ou outro cliente REST API) instalado (opcional)

## Instalação
1. Clone o repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/seu-usuario/PacGestaoVoluntarios.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd PacGestaoVoluntarios
   ```

3. Instale as dependências do Node.js:
   ```bash
   npm install
   ```

4. Importe o banco de dados MySQL:
   - Coloque o arquivo Voluntarios.sql na pasta Xampp em seu computador
   - crie um novo banco de dados e saia usando quit
   - escreva: mysql -u root nome-do-seu-banco < Voluntarios.sql (descompacta o bd)
   - agora entre no banco de dados que você criou
   

## Execução
1. Inicie o servidor Node.js:
   ```bash
   npm start
   ```

2. O servidor estará em execução em `http://localhost:3000`.

## Uso
1. Utilize o Insomnia (ou outro cliente REST API) para enviar solicitações HTTP para o servidor em `http://localhost:3000`.

## Contribuição
Contribuições são bem-vindas! Para contribuir com o projeto, siga as etapas abaixo:
1. Faça um Fork do projeto
2. Crie uma branch com a sua feature (`git checkout -b feature/NovaFeature`)
3. Faça o commit das suas alterações (`git commit -m 'Adicionando NovaFeature'`)
4. Faça o push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request
