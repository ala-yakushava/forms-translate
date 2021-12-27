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
    allowNull: false,
    comment: 'Field is hidden'
  },
  required: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    comment: 'Field is required to fill'
  }
}, {
  freezeTableName: true
});

Field.belongsToMany(GroupCountry, { through: FieldGroupCountry });
GroupCountry.belongsToMany(Field, { through: FieldGroupCountry });
