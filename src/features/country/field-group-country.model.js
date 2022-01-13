import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import { GroupCountry } from './group-country.model';
import { Field } from '../field';

export const FieldGroupCountry = sequelize.define('FieldGroupCountry', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  hidden: {
    type: DataTypes.BOOLEAN,
    comment: 'Field is hidden'
  },
  required: {
    type: DataTypes.BOOLEAN,
    comment: 'Field is required to fill'
  },
  order: {
    type: DataTypes.INTEGER,
    comment: 'Order of field'
  },
  label: {
    type: DataTypes.STRING,
    comment: 'Key of dictionary for label'
  },
  placeholder: {
    type: DataTypes.STRING,
    comment: 'Key of dictionary for placeholder'
  },
  hint: {
    type: DataTypes.STRING,
    comment: 'Key of dictionary for hint'
  },
  error: {
    type: DataTypes.STRING,
    comment: 'Key of dictionary for error'
  },
}, {
  freezeTableName: true
});

Field.belongsToMany(GroupCountry, { through: FieldGroupCountry });
GroupCountry.belongsToMany(Field, { through: FieldGroupCountry });
FieldGroupCountry.hasMany(Dictionary, { foreignKey: 'sourceId' });
Dictionary.belongsTo(FieldGroupCountry);
