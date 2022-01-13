import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import { Dictionary } from '../dictionary';

export const Group = sequelize.define('Group', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Value of group'
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Key of dictionary for group'
  },
  default: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    comment: 'The group is common for all countries'
  },
  timestamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
});

Group.hasOne(Dictionary, { foreignKey: 'sourceId' });
Dictionary.belongsTo(Group);
