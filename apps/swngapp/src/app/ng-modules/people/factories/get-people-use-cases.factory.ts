import { PeopleAdapter, PeopleUseCases } from '@swfalcon/swdata';
import { HttpBase } from '@swfalcon/swdata';

export const getPeopleUseCasesService = (http: HttpBase) => {
  const adapter = new PeopleAdapter(http);

  return new PeopleUseCases(adapter);
}