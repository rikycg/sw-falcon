import { PlanetsAdapter, PlanetsUseCases } from '@swfalcon/swdata';
import { HttpBase } from '@swfalcon/swdata';

export const getPlanetsUseCasesService = (http: HttpBase) => {
  const adapter = new PlanetsAdapter(http);

  return new PlanetsUseCases(adapter);
}