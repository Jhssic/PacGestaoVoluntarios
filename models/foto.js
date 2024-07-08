// models/foto.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Postagem from './postagem';

const Foto = sequelize.define('Foto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    postagem_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
    },
});

Foto.belongsTo(Postagem, { foreignKey: 'postagem_id' });

export default Foto;
