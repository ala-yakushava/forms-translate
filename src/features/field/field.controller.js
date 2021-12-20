import { fieldService } from './setup';

export const fieldController = {
  getFields: async (_req, res) => {
    const fields = await fieldService.findAll();
    res.send(fields);
  }
};
