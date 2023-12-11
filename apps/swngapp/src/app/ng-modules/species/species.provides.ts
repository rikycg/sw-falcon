import { SpeciesUseCases } from '@swfalcon/swdata';

import { HttpService } from '../../commons/services/http.service';
import { getSpeciesUseCasesService } from './factories/get-species-use-cases.factory';

export const speciesProvides = [
  {
    provide: SpeciesUseCases,
    useFactory: getSpeciesUseCasesService,
    deps: [HttpService],
  },
];