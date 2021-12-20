import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db';

export const Language = sequelize.define('Language', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Name of language'
  },
  dialect: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Dialect of language'
  },
  isRtl: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    comment: 'Writing direction from right to left'
  },
  code: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Code of language'
  },
  timestamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
},
{
  paranoid: true
});
