import { Field } from './field.model';

export class FieldRepository {
  async findAll() {
    const fields = await Field.findAll();
    return fields;
  }
}
