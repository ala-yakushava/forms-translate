import { languageService } from './setup';

export const languageController = {
  getLanguages: async (_req, res) => {
    const languages = await languageService.findAll();
    res.send(languages);
  },

  addDictionaryToLanguage: async (req, res) => {
    const { languageId, dictionaryId, translate } = req.body;
    await languageService.addDictionaryToLanguage(languageId, dictionaryId, translate);
    res.send(`dictionaries ${dictionaryId} are added to language ${languageId}`);
  },

  getDictionariesFromLanguage: async (req, res) => {
    const { languageId } = req.body;
    const dictionaries = await languageService.getDictionariesFromLanguage(languageId);
    res.send(dictionaries);
  }
};
