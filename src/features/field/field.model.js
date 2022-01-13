import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import { Dictionary } from '../dictionary';

export const Field = sequelize.define('Field', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Field's type"
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Name of field'
  },
  default: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    comment: 'The field is common for all groups'
  },
  hidden: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    comment: 'Field is hidden'
  },
  required: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    comment: 'Field is required to fill'
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Order of field'
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Key of dictionary for label'
  },
  placeholder: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Key of dictionary for placeholder'
  },
  hint: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Key of dictionary for hint'
  },
  error: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Key of dictionary for error'
  },
  timestamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
});

Field.hasMany(Dictionary, { foreignKey: 'sourceId' });
Dictionary.belongsTo(Field);
