import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

try {
  dotenv.config();
  console.log(".env file successfully loaded into process.env");
} catch (error) {
  console.error("Error loading .env into process.env:", error);
}
//dotenv.config();

//console.log(process.env);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 3306,
  dialect: 'mysql',
  connectTimeout: 60000,
});

//console.log(sequelize);

// Testar a conexão
/*
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
*/


export default sequelize;
