export class DictionaryService {
  constructor(dictonaryRepository) {
    this.dictonaryRepository = dictonaryRepository;
  }

  async findAll() {
    try {
      return await this.dictonaryRepository.findAll();
    } catch (error) {
      throw new Error('Dictionary - findAll', error);
    }
  }
}
