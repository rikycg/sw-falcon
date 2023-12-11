import { Pagination } from '../../../commons/models/pagination.model';
import { People } from '../entities/people.entity';

export abstract class PeopleRepository {
  abstract getAll(page?: number, search?: string): Promise<Pagination<People>>;
  abstract getById(id: number): Promise<People>;
}