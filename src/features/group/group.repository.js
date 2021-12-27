import { Group } from './group.model';

export class GroupRepository {
  async findAll() {
    return await Group.findAll();
  }
}
