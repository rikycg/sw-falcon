import { Specie } from '../domain/entities/specie.entity';
import { SpecieRepository } from '../domain/repository/specie.repository';

export class GetSpecieByIdCase {
  constructor(private repository: SpecieRepository) {}

  execute(id: number): Promise<Specie> {
    return this.repository.getById(id);
  }
}