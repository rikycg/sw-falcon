import { PlanetsUseCases } from '@swfalcon/swdata';

import { HttpService } from '../../commons/services/http.service';
import { getPlanetsUseCasesService } from './factories/get-planets-use-cases.factory';

export const planetsProvides = [
  {
    provide: PlanetsUseCases,
    useFactory: getPlanetsUseCasesService,
    deps: [HttpService],
  },
];