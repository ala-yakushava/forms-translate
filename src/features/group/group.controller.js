import { groupService } from './setup';

export const groupController = {
  getGroups: async (_req, res) => {
    const groups = await groupService.findAll();
    res.send(groups);
  }
};
