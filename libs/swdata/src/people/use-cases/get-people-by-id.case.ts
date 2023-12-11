import { People } from '../domain/entities/people.entity';
import { PeopleRepository } from '../domain/repository/people.repository';

export class GetPeopleByIdCase {
  constructor(private repository: PeopleRepository) {}

  execute(id: number): Promise<People> {
    return this.repository.getById(id);
  }
}