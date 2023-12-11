import { Planet } from '../domain/entities/planet.entity';
import { PlanetRepository } from '../domain/repository/planet.repository';

export class GetPlanetByIdCase {
  constructor(private repository: PlanetRepository) {}

  execute(id: number): Promise<Planet> {
    return this.repository.getById(id);
  }
}