// models/voluntario.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Voluntario = sequelize.define('Voluntario', {
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    telefone: {
        type: DataTypes.STRING(20),
    },
    data_nascimento: {
        type: DataTypes.DATE,
    },
    endereco: {
        type: DataTypes.STRING(255),
    },
});

Voluntario.hasMany(Participacao, { foreignKey: 'voluntario_id' });
Participacao.belongsTo(Voluntario, { foreignKey: 'voluntario_id' });
Participacao.belongsTo(Evento, { foreignKey: 'evento_id' });

Voluntario.prototype.getEventosInscritos = async function () {
    const participacoes = await Participacao.findAll({
        where: {
            voluntario_id: this.id,
        },
        include: [Evento],
    });

    return participacoes.map(participacao => participacao.Evento);
};



export default Voluntario;
