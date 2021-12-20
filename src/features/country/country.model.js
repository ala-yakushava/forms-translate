import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import { Language } from '../language';

export const Country = sequelize.define('Country', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Name of country'
  },
  displayName: {
    type: DataTypes.STRING,
    comment: 'Display name of country'
  },
  localName: {
    type: DataTypes.STRING,
    comment: 'Local name of country'
  },
  dialingCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Dialing code of country'
  },
  src: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Flag of country'
  },
  timestamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
},
{
  paranoid: true
});

Country.hasMany(Language);
Language.belongsTo(Country);
