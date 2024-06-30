import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

const sequelize = new Sequelize('voluntarios', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
