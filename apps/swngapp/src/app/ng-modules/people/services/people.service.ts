import { Injectable } from '@angular/core';
import { Pagination, People, PeopleUseCases } from '@swfalcon/swdata';

import { TopicServiceBase } from '../../../commons/bases/topic-service.base';
import { SwPeopleComponent } from '../presentation/sw-people/sw-people.component';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends TopicServiceBase {
  topicName = 'people';
  component = SwPeopleComponent;
  inputsKey = 'people';
  title = 'Characters';
  
  constructor(private peopleUseCases: PeopleUseCases) {
    super();
  }

  async getAllCase(page: number, search?: string): Promise<Pagination<People>> {
    return this.peopleUseCases.getAll(page, search);
  }

  async getByIdCase(id: number): Promise<People> {
    return this.peopleUseCases.getById(id);
  }
}