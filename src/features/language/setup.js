import { LanguageService } from './language.service';
import { LanguageRepository } from './language.repository';

const languageRepository = new LanguageRepository();
export const languageService = new LanguageService(languageRepository);
