import { Vehicle } from '../domain/entities/vehicle.entity';
import { VehicleRepository } from '../domain/repository/vehicle.repository';

export class GetVehicleByIdCase {
  constructor(private repository: VehicleRepository) {}

  execute(id: number): Promise<Vehicle> {
    return this.repository.getById(id);
  }
}