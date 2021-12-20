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

  async addFieldToGroup(groupId, fieldId, hidden, mandatory) {
    try {
      return await this.groupRepository.addFieldToGroup(
        groupId, fieldId, hidden, mandatory
      );
    } catch (error) {
      throw new Error('Group - addFieldsToGroup', error);
    }
  }

  async getFieldsFromGroup(groupId) {
    try {
      return await this.groupRepository.getFieldsFromGroup(groupId);
    } catch (error) {
      throw new Error('Group - getFieldsFromGroup', error);
    }
  }
}
