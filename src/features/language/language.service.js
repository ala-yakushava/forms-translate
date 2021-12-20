export class LanguageService {
  constructor(languageRepository) {
    this.languageRepository = languageRepository;
  }

  async findAll() {
    try {
      return await this.languageRepository.findAll();
    } catch (error) {
      throw new Error('Language - findAll', error);
    }
  }

  async addDictionaryToLanguage(languageId, dictionaryId, translate) {
    try {
      return await this.languageRepository.addDictionaryToLanguage(languageId, dictionaryId, translate);
    } catch (error) {
      throw new Error('Language - addDictionaryToLanguage', error);
    }
  }

  async getDictionariesFromLanguage(languageId) {
    try {
      return await this.languageRepository.getDictionariesFromLanguage(languageId);
    } catch (error) {
      throw new Error('Language - getDictionariesFromLanguage', error);
    }
  }
}
