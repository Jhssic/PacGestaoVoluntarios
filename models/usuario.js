// models/usuario.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(20),
    },
    data_criacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

export default Usuario;