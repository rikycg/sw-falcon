import { StarshipsAdapter } from './infrastructure/adapters/starships.adapter';
import { GetAllStarshipsCase } from './use-cases/get-all-starships.case';
import { GetStarshipByIdCase } from './use-cases/get-starship-by-id.case';

export class StarshipsUseCases {
  constructor(private adapter: StarshipsAdapter) { }

  getAll(page: number = 1, search?: string) {
    return new GetAllStarshipsCase(this.adapter).execute(page, search);
  }

  getById(id: number) {
    return new GetStarshipByIdCase(this.adapter).execute(id);
  }
}