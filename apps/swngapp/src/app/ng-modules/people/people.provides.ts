import { PeopleUseCases } from '@swfalcon/swdata';
import { HttpService } from '../../commons/services/http.service';

import { getPeopleUseCasesService } from './factories/get-people-use-cases.factory';
import { PeopleService } from './services/people.service';

export const peopleProvides = [
  {
    provide: PeopleUseCases,
    useFactory: getPeopleUseCasesService,
    deps: [HttpService],
  },
];