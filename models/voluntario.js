import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Participacao from './participacao.js'; 
import Evento from './evento.js'; 

const Voluntario = sequelize.define('Voluntario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Valor padrão é a data atual
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
}, {
    tableName: 'voluntarios', // Nome da tabela no banco de dados
    timestamps: false, // Habilita automaticamente os campos createdAt e updatedAt
});

// Definição das associações
Voluntario.hasMany(Participacao, { foreignKey: 'voluntario_id' });
Participacao.belongsTo(Voluntario, { foreignKey: 'voluntario_id' });
Participacao.belongsTo(Evento, { foreignKey: 'evento_id' });

// Método para obter os eventos inscritos pelo voluntário
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
