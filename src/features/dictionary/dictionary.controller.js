import { dictionaryService } from './setup';

export const dictionaryController = {
  getDictionaries: async (_req, res) => {
    const dictionaries = await dictionaryService.findAll();
    res.send(dictionaries);
  }
};
