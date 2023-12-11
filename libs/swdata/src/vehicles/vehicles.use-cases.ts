import { VehiclesAdapter } from './infrastructure/adapters/vehicles.adapter';
import { GetAllVehiclesCase } from './use-cases/get-all-vehicles.case';
import { GetVehicleByIdCase } from './use-cases/get-vehicle-by-id.case';

export class VehiclesUseCases {
  constructor(private adapter: VehiclesAdapter) { }

  getAll(page: number = 1, search?: string) {
    return new GetAllVehiclesCase(this.adapter).execute(page, search);
  }

  getById(id: number) {
    return new GetVehicleByIdCase(this.adapter).execute(id);
  }
}