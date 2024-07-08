// models/administrador.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './usuario';

const Administrador = sequelize.define('Administrador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data_criacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

Administrador.belongsTo(Usuario, { foreignKey: 'usuario_id' });

export default Administrador;
