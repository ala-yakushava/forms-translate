import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import { Country } from './country.model';
import { Group } from '../group';

export const GroupCountry = sequelize.define('GroupCountry', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  }
}, {
  freezeTableName: true
});

Group.belongsToMany(Country, { through: GroupCountry });
Country.belongsToMany(Group, { through: GroupCountry });
