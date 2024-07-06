import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

const sequelize = new Sequelize('gestaoVoluntarios', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // ou 'mariadb'
  port: 3306, // Porta padrão do MySQL/MariaDB
  logging: false, // Se estiver true, exibe logs SQL no console
});

export default sequelize;
