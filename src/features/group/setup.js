import { GroupService } from './group.service';
import { GroupRepository } from './group.repository';

const groupRepository = new GroupRepository();
export const groupService = new GroupService(groupRepository);
