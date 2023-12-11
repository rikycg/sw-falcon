import { StarshipsUseCases } from '@swfalcon/swdata';

import { HttpService } from '../../commons/services/http.service';
import { getStarshipsUseCasesService } from './factories/get-starships-use-cases.factory';

export const starshipsProvides = [
  {
    provide: StarshipsUseCases,
    useFactory: getStarshipsUseCasesService,
    deps: [HttpService],
  },
];