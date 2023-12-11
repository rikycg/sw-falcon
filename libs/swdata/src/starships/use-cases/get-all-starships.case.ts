import { Pagination } from '../../commons/models/pagination.model';
import { Starship } from '../domain/entities/starship.entity';
import { StarshipRepository } from '../domain/repository/starship.repository';

export class GetAllStarshipsCase {
  constructor(private repository: StarshipRepository) {}

  execute(page: number = 1, search?: string): Promise<Pagination<Starship>> {
    return this.repository.getAll(page, search);
  }
}