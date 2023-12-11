import { FilmsUseCases } from '@swfalcon/swdata';
import { HttpService } from '../../commons/services/http.service';

import { getFilmsUseCasesService } from './factories/get-films-use-cases.factory';
import { FilmsService } from './services/films.service';

export const filmsProvides = [
  {
    provide: FilmsUseCases,
    useFactory: getFilmsUseCasesService,
    deps: [HttpService],
  },
  FilmsService,
];