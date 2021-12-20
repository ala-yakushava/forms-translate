import { CountryService } from './country.service';
import { CountryRepository } from './country.repository';

const countryRepository = new CountryRepository();
export const countryService = new CountryService(countryRepository);
