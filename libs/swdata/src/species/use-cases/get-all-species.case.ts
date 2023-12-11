import { Pagination } from '../../commons/models/pagination.model';
import { Specie } from '../domain/entities/specie.entity';
import { SpecieRepository } from '../domain/repository/specie.repository';

export class GetAllSpeciesCase {
  constructor(private repository: SpecieRepository) {}

  execute(page: number = 1, search?: string): Promise<Pagination<Specie>> {
    return this.repository.getAll(page, search);
  }
}