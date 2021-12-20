import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import { Dictionary } from '../dictionary';

export const Right = sequelize.define('Right', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Value of right'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Key of dictionary for right'
  },
  timestamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
},
{
  paranoid: true
});

Right.hasOne(Dictionary, { foreignKey: 'sourceId' });
Dictionary.belongsTo(Right);
