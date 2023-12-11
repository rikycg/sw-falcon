import { Pagination } from '../../commons/models/pagination.model';
import { Film } from '../domain/entities/film.entity';
import { FilmRepository } from '../domain/repository/film.repository';

export class GetFilmByIdCase {
  constructor(private repository: FilmRepository) {}

  execute(id: number): Promise<Film> {
    return this.repository.getById(id);
  }
}