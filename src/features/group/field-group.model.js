import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import { Group } from './group.model';
import { Field } from '../field';

export const FieldGroup = sequelize.define('FieldGroup', {
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
  mandatory: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    comment: 'Field is required to fill'
  }
}, {
  freezeTableName: true
});

Field.belongsToMany(Group, { through: FieldGroup });
Group.belongsToMany(Field, { through: FieldGroup });
