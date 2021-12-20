export class CountryService {
  constructor(countryRepository) {
    this.countryRepository = countryRepository;
  }

  async findAll() {
    try {
      return await this.countryRepository.findAll();
    } catch (error) {
      throw new Error('Country - findAll', error);
    }
  }

  async addLanguagesToCountry(countryId, languagesIds) {
    try {
      return await this.countryRepository.addLanguagesToCountry(countryId, languagesIds);
    } catch (error) {
      throw new Error('Country - addLanguagesToCountry', error);
    }
  }

  async getLanguagesFromCountry(countryId) {
    try {
      return await this.countryRepository.getLanguagesFromCountry(countryId);
    } catch (error) {
      throw new Error('Country - getLanguagesFromCountry', error);
    }
  }

  async addRightsToCountry(countryId, rightIds) {
    try {
      return await this.countryRepository.addRightsToCountry(countryId, rightIds);
    } catch (error) {
      throw new Error('Country - addRightsToCountry', error);
    }
  }

  async getRightsFromCountry(countryId) {
    try {
      return await this.countryRepository.getRightsFromCountry(countryId);
    } catch (error) {
      throw new Error('Country - getRightsFromCountry', error);
    }
  }

  async addGroupsToCountry(countryId, groupIds) {
    try {
      return await this.countryRepository.addGroupsToCountry(countryId, groupIds);
    } catch (error) {
      throw new Error('Country - addGroupsToCountry', error);
    }
  }

  async getGroupsFromCountry(countryId) {
    try {
      return await this.countryRepository.getGroupsFromCountry(countryId);
    } catch (error) {
      throw new Error('Country - getGroupsFromCountry', error);
    }
  }
}
