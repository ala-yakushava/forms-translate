import { DictionaryRepository } from './dictionary.repository';
import { DictionaryService } from './dictionary.service';

const dictionaryRepository = new DictionaryRepository();
export const dictionaryService = new DictionaryService(dictionaryRepository);
