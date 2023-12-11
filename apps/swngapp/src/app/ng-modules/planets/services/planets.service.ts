import { Injectable } from '@angular/core';
import { Pagination, Planet, PlanetsUseCases } from '@swfalcon/swdata';

import { TopicServiceBase } from '../../../commons/bases/topic-service.base';
import { SwPlanetComponent } from '../presentation/sw-planet/sw-planet.component';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService extends TopicServiceBase {
  topicName = 'planets';
  component = SwPlanetComponent;
  inputsKey = 'planet';
  title = 'Planets';
  
  constructor(private planetsUseCases: PlanetsUseCases) {
    super();
  }

  async getAllCase(page: number, search?: string): Promise<Pagination<Planet>> {
    return this.planetsUseCases.getAll(page, search);
  }

  async getByIdCase(id: number): Promise<Planet> {
    return this.planetsUseCases.getById(id);
  }
}