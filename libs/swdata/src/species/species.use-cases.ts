import { SpeciesAdapter } from './infrastructure/adapters/species.adapter';
import { GetAllSpeciesCase } from './use-cases/get-all-species.case';
import { GetSpecieByIdCase } from './use-cases/get-specie-by-id.case';

export class SpeciesUseCases {
  constructor(private adapter: SpeciesAdapter) { }

  getAll(page: number = 1, search?: string) {
    return new GetAllSpeciesCase(this.adapter).execute(page, search);
  }

  getById(id: number) {
    return new GetSpecieByIdCase(this.adapter).execute(id);
  }
}