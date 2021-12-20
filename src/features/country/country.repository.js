import { Op } from 'sequelize';
import { Country } from './country.model';
import { Language } from '../language';
import { Right } from '../rigth';
import { Group } from '../group';
import { sequelize } from '../../db';

export class CountryRepository {
  async findAll() {
    const countries = await Country.findAll();
    return countries;
  }

  async addLanguagesToCountry(countryId, languageIds) {
    try {
      await sequelize.transaction(async (t) => {
        const country = await Country.findByPk(countryId, { transaction: t });

        const languages = await Language.findAll({
          where: {
            id: {
              [Op.or]: languageIds
            }
          },
          transaction: t
        });

        await country.addLanguages(languages, { transaction: t });

        return country;
      });
    } catch (error) {
      throw new Error('transaction - failed', error);
    }
  }

  async getLanguagesFromCountry(countryId) {
    const country = await Country.findByPk(countryId);
    const languages = await country.getLanguages();

    return languages;
  }

  async addRightsToCountry(countryId, rightIds) {
    try {
      await sequelize.transaction(async (t) => {
        const country = await Country.findByPk(countryId, { transaction: t });

        const rights = await Right.findAll({
          where: {
            id: {
              [Op.or]: rightIds
            }
          },
          transaction: t
        });

        await country.addRights(rights, { transaction: t });

        return country;
      });
    } catch (error) {
      throw new Error('transaction - failed', error);
    }
  }

  async getRightsFromCountry(countryId) {
    const country = await Country.findByPk(countryId);
    const rights = await country.getRights();

    return rights;
  }

  async addGroupsToCountry(countryId, groupIds) {
    try {
      await sequelize.transaction(async (t) => {
        const country = await Country.findByPk(countryId, { transaction: t });

        const groups = await Group.findAll({
          where: {
            id: {
              [Op.or]: groupIds
            }
          },
          transaction: t
        });

        await country.addGroups(groups, { transaction: t });

        return country;
      });
    } catch (error) {
      throw new Error('transaction - failed', error);
    }
  }

  async getGroupsFromCountry(countryId) {
    const country = await Country.findByPk(countryId);
    const groups = await country.getGroups();

    return groups;
  }
}
