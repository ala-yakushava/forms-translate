import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import { Country } from './country.model';
import { Right } from '../rigth';

export const RightCountry = sequelize.define('RightCountry', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  }
}, {
  freezeTableName: true
});

Right.belongsToMany(Country, { through: RightCountry });
Country.belongsToMany(Right, { through: RightCountry });
