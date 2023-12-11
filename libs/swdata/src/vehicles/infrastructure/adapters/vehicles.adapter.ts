import { HttpBase } from '@swfalcon/swdata';

import { ApiUrls } from '../../../commons/constants/api';
import { ResponseDto } from '../../../commons/dtos/response.dto';
import { Pagination } from '../../../commons/models/pagination.model';

import { VehicleRepository } from '../../domain/repository/vehicle.repository';
import { Vehicle } from '../../domain/entities/vehicle.entity';
import { GetAllDto } from '../dtos/get-all.dto';
import { getAllDtoToVehicleListMapper } from '../mappers/get-all-dto-to-vehicle-list.mapper';

export class VehiclesAdapter extends VehicleRepository {
  constructor(public http: HttpBase) {
    super();
  }

  getAll(page: number = 1, search = ''): Promise<Pagination<Vehicle>> {
    return this.http.get<ResponseDto<GetAllDto>>(ApiUrls.vehicles, { params: { page, search }})
      .then(response => new Pagination<Vehicle>(
        page,
        response.next,
        getAllDtoToVehicleListMapper(response.results),
        response.count,
      ));
  }

  getById(id: number): Promise<Vehicle> {
    return this.http.get<GetAllDto>(`${ApiUrls.vehicles}/${id}`)
      .then(response => getAllDtoToVehicleListMapper([response])[0]);
  }
}