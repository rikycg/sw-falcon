import { SpeciesAdapter, SpeciesUseCases } from '@swfalcon/swdata';
import { HttpBase } from '@swfalcon/swdata';

export const getSpeciesUseCasesService = (http: HttpBase) => {
  const adapter = new SpeciesAdapter(http);

  return new SpeciesUseCases(adapter);
}