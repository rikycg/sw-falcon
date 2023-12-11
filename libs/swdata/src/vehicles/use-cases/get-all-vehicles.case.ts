import { Pagination } from '../../commons/models/pagination.model';
import { Vehicle } from '../domain/entities/vehicle.entity';
import { VehicleRepository } from '../domain/repository/vehicle.repository';

export class GetAllVehiclesCase {
  constructor(private repository: VehicleRepository) {}

  execute(page: number = 1, search?: string): Promise<Pagination<Vehicle>> {
    return this.repository.getAll(page, search);
  }
}