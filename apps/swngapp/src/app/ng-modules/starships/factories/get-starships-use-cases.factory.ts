import { StarshipsAdapter, StarshipsUseCases } from '@swfalcon/swdata';
import { HttpBase } from '@swfalcon/swdata';

export const getStarshipsUseCasesService = (http: HttpBase) => {
  const adapter = new StarshipsAdapter(http);

  return new StarshipsUseCases(adapter);
}