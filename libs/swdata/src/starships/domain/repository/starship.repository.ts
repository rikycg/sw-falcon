import { Pagination } from '../../../commons/models/pagination.model';
import { Starship } from '../entities/starship.entity';

export abstract class StarshipRepository {
  abstract getAll(page?: number, search?: string): Promise<Pagination<Starship>>;
  abstract getById(id: number): Promise<Starship>;
}