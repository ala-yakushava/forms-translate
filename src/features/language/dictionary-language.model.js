import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import { Language } from './language.model';
import { Dictionary } from '../dictionary';

export const DictionaryLanguage = sequelize.define('DictionaryLanguage', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  translate: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Translate'
  }
}, {
  freezeTableName: true
});

Language.belongsToMany(Dictionary, { through: DictionaryLanguage });
Dictionary.belongsToMany(Language, { through: DictionaryLanguage });
