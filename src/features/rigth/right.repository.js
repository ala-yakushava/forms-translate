import { Right } from './right.model';

export class RightRepository {
  async findAll() {
    return await Right.findAll();
  }
}
