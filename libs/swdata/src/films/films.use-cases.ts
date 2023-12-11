import { FilmsAdapter } from './infrastructure/adapters/films.adapter';
import { GetAllFilmsCase } from './use-cases/get-all-films.case';
import { GetFilmByIdCase } from './use-cases/get-film-by-id.case';

export class FilmsUseCases {
  constructor(private adapter: FilmsAdapter) { }

  getAll(page: number = 1, search: string = '') {
    return new GetAllFilmsCase(this.adapter).execute(page, search);
  }

  getById(id: number) {
    return new GetFilmByIdCase(this.adapter).execute(id);
  }
}