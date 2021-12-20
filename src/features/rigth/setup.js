import { RightService } from './right.service';
import { RightRepository } from './right.repository';

const rightRepository = new RightRepository();
export const rightService = new RightService(rightRepository);
