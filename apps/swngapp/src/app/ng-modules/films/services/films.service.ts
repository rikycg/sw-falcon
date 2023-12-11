import { Injectable } from '@angular/core';
import { Film, FilmsUseCases, Pagination } from '@swfalcon/swdata';

import { TopicServiceBase } from '../../../commons/bases/topic-service.base';
import { SwFilmComponent } from '../presentation/sw-film/sw-film.component';
import { Topic } from '../../../commons/types/topic.type';

@Injectable()
export class FilmsService extends TopicServiceBase {
  topicName = 'films';
  title = 'Movies';
  inputsKey = 'film';
  component = SwFilmComponent;
  
  constructor(private filmsUseCases: FilmsUseCases) {
    super();
  }

  async getAllCase(page: number, search = ''): Promise<Pagination<Film>> {
    return this.filmsUseCases.getAll(page, search);
  }

  async getByIdCase(id: number): Promise<Film> {
    return this.filmsUseCases.getById(id);
  }
}