import { countryService } from './setup';

export const countryController = {
  getCountries: async (_req, res) => {
    const countries = await countryService.findAll();
    res.send(countries);
  },

  addLanguagesToCountry: async (req, res) => {
    const { countryId, languageIds } = req.body;
    await countryService.addLanguagesToCountry(countryId, languageIds);
    res.send(`languages ${languageIds} are added to country ${countryId}`);
  },

  getLanguagesFromCountry: async (req, res) => {
    const { countryId } = req.body;
    const languages = await countryService.getLanguagesFromCountry(countryId);
    res.send(`languages ${languages.length} are in country ${countryId}`);
  },

  addRightsToCountry: async (req, res) => {
    const { countryId, rightIds } = req.body;
    await countryService.addRightsToCountry(countryId, rightIds);
    res.send(`rights ${rightIds} are added to country ${countryId}`);
  },

  getRightsFromCountry: async (req, res) => {
    const { countryId } = req.body;
    const rights = await countryService.getRightsFromCountry(countryId);
    res.send(`rights ${rights.length} are in country ${countryId}`);
  },

  addGroupsToCountry: async (req, res) => {
    const { countryId, groupIds } = req.body;
    await countryService.addGroupsToCountry(countryId, groupIds);
    res.send(`groups ${groupIds} are added to country ${countryId}`);
  },

  getGroupsFromCountry: async (req, res) => {
    const { countryId } = req.body;
    const groups = await countryService.getGroupsFromCountry(countryId);
    res.send(`groups ${groups.length} are in country ${countryId}`);
  }
};
