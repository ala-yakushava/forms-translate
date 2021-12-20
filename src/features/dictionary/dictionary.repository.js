import { Dictionary } from './dictionary.model';

export class DictionaryRepository {
  async findAll() {
    const dictionaries = await Dictionary.findAll();
    return dictionaries;
  }
}
