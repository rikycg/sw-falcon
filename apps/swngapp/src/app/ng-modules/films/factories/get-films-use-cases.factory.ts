import { FilmsAdapter, FilmsUseCases } from '@swfalcon/swdata';
import { HttpBase } from '@swfalcon/swdata';

export const getFilmsUseCasesService = (http: HttpBase) => {
  const adapter = new FilmsAdapter(http);

  return new FilmsUseCases(adapter);
}