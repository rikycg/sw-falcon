import { Injectable } from '@angular/core';
import { Pagination, Vehicle, VehiclesUseCases } from '@swfalcon/swdata';

import { TopicServiceBase } from '../../../commons/bases/topic-service.base';
import { SwVehicleComponent } from '../presentation/sw-vehicle/sw-vehicle.component';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService extends TopicServiceBase {
  topicName = 'vehicles';
  component = SwVehicleComponent;
  inputsKey = 'vehicle';
  title = 'Vehicles';
  
  constructor(private vehiclesUseCases: VehiclesUseCases) {
    super();
  }

  async getAllCase(page: number, search?: string): Promise<Pagination<Vehicle>> {
    return this.vehiclesUseCases.getAll(page, search);
  }

  async getByIdCase(id: number): Promise<Vehicle> {
    return this.vehiclesUseCases.getById(id);
  }
}