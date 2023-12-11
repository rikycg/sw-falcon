import { Injectable } from '@angular/core';
import { Pagination, Specie, SpeciesUseCases } from '@swfalcon/swdata';

import { TopicServiceBase } from '../../../commons/bases/topic-service.base';
import { SwSpecieComponent } from '../presentation/sw-specie/sw-specie.component';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService extends TopicServiceBase {
  topicName = 'species';
  component = SwSpecieComponent;
  inputsKey = 'specie';
  title = 'Species';
  
  constructor(private speciesUseCases: SpeciesUseCases) {
    super();
  }

  async getAllCase(page: number, search?: string): Promise<Pagination<Specie>> {
    return this.speciesUseCases.getAll(page);
  }

  async getByIdCase(id: number): Promise<Specie> {
    return this.speciesUseCases.getById(id);
  }
}