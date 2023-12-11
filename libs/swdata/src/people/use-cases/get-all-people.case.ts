import { Pagination } from '../../commons/models/pagination.model';
import { People } from '../domain/entities/people.entity';
import { PeopleRepository } from '../domain/repository/people.repository';

export class GetAllPeopleCase {
  constructor(private repository: PeopleRepository) {}

  execute(page: number = 1, search?: string): Promise<Pagination<People>> {
    return this.repository.getAll(page, search);
  }
}