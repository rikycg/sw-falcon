import { Pagination } from '../../../commons/models/pagination.model';
import { Specie } from '../entities/specie.entity';

export abstract class SpecieRepository {
  abstract getAll(page?: number, search?: string): Promise<Pagination<Specie>>;
  abstract getById(id: number): Promise<Specie>;
}