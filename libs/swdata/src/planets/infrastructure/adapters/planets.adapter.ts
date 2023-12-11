import { HttpBase } from '@swfalcon/swdata';

import { ApiUrls } from '../../../commons/constants/api';
import { ResponseDto } from '../../../commons/dtos/response.dto';
import { Pagination } from '../../../commons/models/pagination.model';

import { PlanetRepository } from '../../domain/repository/planet.repository';
import { Planet } from '../../domain/entities/planet.entity';
import { GetAllDto } from '../dtos/get-all.dto';
import { getAllDtoToPlanetListMapper } from '../mappers/get-all-dto-to-planet-list.mapper';

export class PlanetsAdapter extends PlanetRepository {
  constructor(public http: HttpBase) {
    super();
  }

  getAll(page: number = 1, search = ''): Promise<Pagination<Planet>> {
    return this.http.get<ResponseDto<GetAllDto>>(ApiUrls.planets, { params: { page, search }})
      .then(response => new Pagination<Planet>(
        page,
        response.next,
        getAllDtoToPlanetListMapper(response.results),
        response.count,
      ));
  }

  getById(id: number): Promise<Planet> {
    return this.http.get<GetAllDto>(`${ApiUrls.planets}/${id}`)
      .then(response => getAllDtoToPlanetListMapper([response])[0]);
  }
}