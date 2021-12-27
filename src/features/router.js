import express from 'express';
import { countryController } from './country';
import { languageController } from './language';
import { dictionaryController } from './dictionary';
import { rightController } from './rigth';
import { groupController } from './group';
import { fieldController } from './field';

const router = express.Router();

router
  // check server
  .get('/', (_req, res) => res.send('Hello World!'))

  // routes of country
  .get('/countries', countryController.getCountries)
  .post('/countries/add-languages', countryController.addLanguagesToCountry)
  .post('/countries/languages', countryController.getLanguagesFromCountry)
  .post('/countries/add-rights', countryController.addRightsToCountry)
  .post('/countries/rights', countryController.getRightsFromCountry)
  .post('/countries/add-groups', countryController.addGroupsToCountry)
  .post('/countries/groups', countryController.getGroupsFromCountry)
  .post('/countries/groups/add-field', countryController.addFieldToGroupCountry)
  .post('/countries/groups/fields', countryController.getFieldsFromGroupCountry)

  // routes of language
  .get('/languages', languageController.getLanguages)
  .post('/languages/add-dictionary', languageController.addDictionaryToLanguage)
  .post('/languages/dictionaries', languageController.getDictionariesFromLanguage)

  // routes of dictionary
  .get('/dictionaries', dictionaryController.getDictionaries)

  // routes of right
  .get('/rights', rightController.getRights)

  // routes of group
  .get('/groups', groupController.getGroups)

  // routes of field
  .get('/fields', fieldController.getFields);

export default router;
