import { groupService } from './setup';

export const groupController = {
  getGroups: async (_req, res) => {
    const groups = await groupService.findAll();
    res.send(groups);
  },

  addFieldToGroup: async (req, res) => {
    const { groupId, fieldId, hidden, mandatory } = req.body;
    await groupService.addFieldToGroup(groupId, fieldId, hidden, mandatory);
    res.send(
      `field ${fieldId} are added to group ${groupId} with hidden: ${hidden}, mandatory: ${mandatory}`
    );
  },

  getFieldsFromGroup: async (req, res) => {
    const { groupId } = req.body;
    const fields = await groupService.getFieldsFromGroup(groupId);
    res.send(fields);
  }
};
