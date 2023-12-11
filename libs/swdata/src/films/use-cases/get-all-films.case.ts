import { Pagination } from '../../commons/models/pagination.model';
import { Film } from '../domain/entities/film.entity';
import { FilmRepository } from '../domain/repository/film.repository';

export class GetAllFilmsCase {
  constructor(private repository: FilmRepository) {}

  execute(page: number = 1, search?: string): Promise<Pagination<Film>> {
    return this.repository.getAll(page, search);
  }
}