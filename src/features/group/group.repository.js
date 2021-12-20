import { Group } from './group.model';
import { Field } from '../field';
import { sequelize } from '../../db';

export class GroupRepository {
  async findAll() {
    return await Group.findAll();
  }

  async addFieldToGroup(groupId, fieldId, hidden, mandatory) {
    try {
      await sequelize.transaction(async (t) => {
        const group = await Group.findByPk(groupId, { transaction: t });
        const field = await Field.findByPk(fieldId, { transaction: t });

        await group.addField(
          field,
          { through: { hidden, mandatory } },
          { transaction: t },
        );

        return group;
      });
    } catch (error) {
      throw new Error('transaction - failed', error);
    }
  }

  async getFieldsFromGroup(groupId) {
    const group = await Group.findByPk(groupId);
    const fields = await group.getFields();

    return fields;
  }
}
