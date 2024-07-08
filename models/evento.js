// models/evento.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Evento = sequelize.define('Evento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },  
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    data: {
        type: DataTypes.DATE,
    },
    local: {
        type: DataTypes.STRING(255),
    },
});

export default Evento;

