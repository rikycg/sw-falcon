import { VehiclesUseCases } from '@swfalcon/swdata';

import { HttpService } from '../../commons/services/http.service';
import { getVehiclesUseCasesService } from './factories/get-vehicles-use-cases.factory';

export const vehiclesProvides = [
  {
    provide: VehiclesUseCases,
    useFactory: getVehiclesUseCasesService,
    deps: [HttpService],
  },
];