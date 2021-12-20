export class FieldService {
  constructor(fieldRepository) {
    this.fieldRepository = fieldRepository;
  }

  async findAll() {
    try {
      return await this.fieldRepository.findAll();
    } catch (error) {
      throw new Error('Field - findAll', error);
    }
  }
}
