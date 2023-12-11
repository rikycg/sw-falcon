import { Pagination } from '../../../commons/models/pagination.model';
import { Film } from '../entities/film.entity';

export abstract class FilmRepository {
  abstract getAll(page?: number, search?: string): Promise<Pagination<Film>>;
  abstract getById(id: number): Promise<Film>;
}