import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  RouteReuseStrategy,
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './commons/services/http.service';

import { filmsProvides } from './ng-modules/films/films.provides';
import { peopleProvides } from './ng-modules/people/people.provides';
import { planetsProvides } from './ng-modules/planets/planets.provides';
import { speciesProvides } from './ng-modules/species/species.provides';
import { vehiclesProvides } from './ng-modules/vehicles/vehicles.provides';
import { starshipsProvides } from './ng-modules/starships/starships.provides';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    { 
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy 
    },
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(IonicModule.forRoot({})),
    HttpService,
    ...filmsProvides,
    ...peopleProvides,
    ...planetsProvides,
    ...speciesProvides,
    ...vehiclesProvides,
    ...starshipsProvides,
  ],
};