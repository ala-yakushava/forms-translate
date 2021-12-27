export class GroupService {
  constructor(groupRepository) {
    this.groupRepository = groupRepository;
  }

  async findAll() {
    try {
      return await this.groupRepository.findAll();
    } catch (error) {
      throw new Error('Group - findAll', error);
    }
  }
}
