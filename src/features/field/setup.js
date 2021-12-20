import { FieldService } from './field.service';
import { FieldRepository } from './field.repository';

const fieldRepository = new FieldRepository();
export const fieldService = new FieldService(fieldRepository);
