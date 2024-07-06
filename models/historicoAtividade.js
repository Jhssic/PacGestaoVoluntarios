// models/historico_atividade.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './usuario.js';

const HistoricoAtividade = sequelize.define('HistoricoAtividade', {
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    acao: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    detalhes: {
        type: DataTypes.TEXT,
    },
    data_atividade: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

HistoricoAtividade.belongsTo(Usuario, { foreignKey: 'usuario_id' });

export default HistoricoAtividade;
