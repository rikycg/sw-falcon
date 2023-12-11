import { HttpBase } from '@swfalcon/swdata';

import { ApiUrls } from '../../../commons/constants/api';
import { ResponseDto } from '../../../commons/dtos/response.dto';
import { Pagination } from '../../../commons/models/pagination.model';

import { StarshipRepository } from '../../domain/repository/starship.repository';
import { Starship } from '../../domain/entities/starship.entity';
import { GetAllDto } from '../dtos/get-all.dto';
import { getAllDtoToStarshipListMapper } from '../mappers/get-all-dto-to-starship-list.mapper';

export class StarshipsAdapter extends StarshipRepository {
  constructor(public http: HttpBase) {
    super();
  }

  getAll(page: number = 1, search = ''): Promise<Pagination<Starship>> {
    return this.http.get<ResponseDto<GetAllDto>>(ApiUrls.starships, { params: { page, search }})
      .then(response => new Pagination<Starship>(
        page,
        response.next,
        getAllDtoToStarshipListMapper(response.results),
        response.count,
      ));
  }

  getById(id: number): Promise<Starship> {
    return this.http.get<GetAllDto>(`${ApiUrls.starships}/${id}`)
      .then(response => getAllDtoToStarshipListMapper([response])[0]);
  }
}