import { Pagination } from '../../commons/models/pagination.model';
import { Planet } from '../domain/entities/planet.entity';
import { PlanetRepository } from '../domain/repository/planet.repository';

export class GetAllPlanetsCase {
  constructor(private repository: PlanetRepository) {}

  execute(page: number = 1, search?: string): Promise<Pagination<Planet>> {
    return this.repository.getAll(page, search);
  }
}