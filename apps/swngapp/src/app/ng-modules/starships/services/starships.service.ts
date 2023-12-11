import { Injectable } from '@angular/core';
import { Pagination, Starship, StarshipsUseCases } from '@swfalcon/swdata';

import { TopicServiceBase } from '../../../commons/bases/topic-service.base';
import { SwStarshipComponent } from '../presentation/sw-starship/sw-starship.component';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService extends TopicServiceBase {
  topicName = 'starships';
  component = SwStarshipComponent;
  inputsKey = 'starship';
  title = 'Starships';
  
  constructor(private starshipsUseCases: StarshipsUseCases) {
    super();
  }

  async getAllCase(page: number, search?: string): Promise<Pagination<Starship>> {
    return this.starshipsUseCases.getAll(page, search);
  }

  async getByIdCase(id: number): Promise<Starship> {
    return this.starshipsUseCases.getById(id);
  }
}