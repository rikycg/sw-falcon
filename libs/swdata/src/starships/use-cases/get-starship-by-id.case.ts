import { Starship } from '../domain/entities/starship.entity';
import { StarshipRepository } from '../domain/repository/starship.repository';

export class GetStarshipByIdCase {
  constructor(private repository: StarshipRepository) {}

  execute(id: number): Promise<Starship> {
    return this.repository.getById(id);
  }
}