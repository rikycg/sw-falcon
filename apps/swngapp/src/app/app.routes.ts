import { Route } from '@angular/router';

import { FilmsService } from './ng-modules/films/services/films.service';
import { TopicServiceBase } from './commons/bases/topic-service.base';
import { PeopleService } from './ng-modules/people/services/people.service';
import { PlanetsService } from './ng-modules/planets/services/planets.service';
import { SpeciesService } from './ng-modules/species/services/species.service';
import { VehiclesService } from './ng-modules/vehicles/services/vehicles.service';
import { StarshipsService } from './ng-modules/starships/services/starships.service';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full',
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/topic/topic.page.routes').then((m) =>m.routes),
    providers: [
      {
        provide: TopicServiceBase,
        useExisting: FilmsService,
      },
    ]
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/topic/topic.page.routes').then((m) =>m.routes),
    providers: [
      {
        provide: TopicServiceBase,
        useExisting: PeopleService,
      },
    ]
  },
  {
    path: 'planets',
    loadChildren: () => import('./pages/topic/topic.page.routes').then((m) =>m.routes),
    providers: [
      {
        provide: TopicServiceBase,
        useExisting: PlanetsService,
      },
    ]
  },
  {
    path: 'species',
    loadChildren: () => import('./pages/topic/topic.page.routes').then((m) =>m.routes),
    providers: [
      {
        provide: TopicServiceBase,
        useExisting: SpeciesService,
      },
    ]
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./pages/topic/topic.page.routes').then((m) =>m.routes),
    providers: [
      {
        provide: TopicServiceBase,
        useExisting: VehiclesService,
      },
    ]
  },
  {
    path: 'starships',
    loadChildren: () => import('./pages/topic/topic.page.routes').then((m) =>m.routes),
    providers: [
      {
        provide: TopicServiceBase,
        useExisting: StarshipsService,
      },
    ]
  },
];
