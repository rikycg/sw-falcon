import { Pagination } from '../../../commons/models/pagination.model';
import { Planet } from '../entities/planet.entity';

export abstract class PlanetRepository {
  abstract getAll(page?: number, search?: string): Promise<Pagination<Planet>>;
  abstract getById(id: number): Promise<Planet>;
}