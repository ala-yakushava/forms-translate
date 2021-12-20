import { Language } from './language.model';
import { Dictionary } from '../dictionary';
import { sequelize } from '../../db';

export class LanguageRepository {
  async findAll() {
    const languages = await Language.findAll();
    return languages;
  }

  async addDictionaryToLanguage(languageId, dictionaryId, translate) {
    try {
      await sequelize.transaction(async (t) => {
        const language = await Language.findByPk(languageId, { transaction: t });
        const dictionary = await Dictionary.findByPk(dictionaryId, { transaction: t });
        await language.addDictionary(dictionary, { through: { translate } }, { transaction: t });

        return language;
      });
    } catch (error) {
      throw new Error('transaction - failed', error);
    }
  }

  async getDictionariesFromLanguage(languageId) {
    const language = await Language.findByPk(languageId);
    const dictionaries = await language.getDictionaries();

    return dictionaries;
  }
}
