import { rightService } from './setup';

export const rightController = {
  getRights: async (_req, res) => {
    const rights = await rightService.findAll();
    res.send(rights);
  }
};
