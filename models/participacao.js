// models/participacao.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Participacao = sequelize.define('Participacao', {
    voluntario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data_participacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

Participacao.belongsTo(Voluntario, { foreignKey: 'voluntario_id' });
Participacao.belongsTo(Evento, { foreignKey: 'evento_id' });


export default Participacao;
