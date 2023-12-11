import { PlanetsAdapter } from './infrastructure/adapters/planets.adapter';
import { GetAllPlanetsCase } from './use-cases/get-all-planets.case';
import { GetPlanetByIdCase } from './use-cases/get-planet-by-id.case';

export class PlanetsUseCases {
  constructor(private adapter: PlanetsAdapter) { }

  getAll(page: number = 1, search?: string) {
    return new GetAllPlanetsCase(this.adapter).execute(page, search);
  }

  getById(id: number) {
    return new GetPlanetByIdCase(this.adapter).execute(id);
  }
}