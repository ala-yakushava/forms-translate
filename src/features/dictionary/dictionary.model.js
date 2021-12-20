import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db';

export const Dictionary = sequelize.define('Dictionary', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Key of access to translations'
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Default text'
  },
  timestamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
});
