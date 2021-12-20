export class RightService {
  constructor(rightRepository) {
    this.rightRepository = rightRepository;
  }

  async findAll() {
    try {
      return await this.rightRepository.findAll();
    } catch (error) {
      throw new Error('Right - findAll', error);
    }
  }
}
