import { Pagination } from '../../../commons/models/pagination.model';
import { Vehicle } from '../entities/vehicle.entity';

export abstract class VehicleRepository {
  abstract getAll(page?: number, search?: string): Promise<Pagination<Vehicle>>;
  abstract getById(id: number): Promise<Vehicle>;
}