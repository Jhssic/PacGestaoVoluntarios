// models/postagem.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Voluntario from './voluntario';

const Postagem = sequelize.define('Postagem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    voluntario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    conteudo: {
        type: DataTypes.TEXT,
    },
    data_postagem: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

Postagem.belongsTo(Voluntario, { foreignKey: 'voluntario_id' });

export default Postagem;
