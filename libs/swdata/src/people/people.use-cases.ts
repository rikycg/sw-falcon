import { PeopleAdapter } from './infrastructure/adapters/people.adapter';
import { GetAllPeopleCase } from './use-cases/get-all-people.case';
import { GetPeopleByIdCase } from './use-cases/get-people-by-id.case';

export class PeopleUseCases {
  constructor(private adapter: PeopleAdapter) { }

  getAll(page: number = 1, search?: string) {
    return new GetAllPeopleCase(this.adapter).execute(page, search);
  }

  getById(id: number) {
    return new GetPeopleByIdCase(this.adapter).execute(id);
  }
}