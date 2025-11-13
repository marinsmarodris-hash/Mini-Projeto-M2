import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

// Definição do modelo como objeto Sequelize
const Musica = sequelize.define('Musica', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'musicas',
  timestamps: false
});

module.exports = Musica;
