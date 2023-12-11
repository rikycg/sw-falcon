import { HttpBase } from '@swfalcon/swdata';

import { ApiUrls } from '../../../commons/constants/api';
import { ResponseDto } from '../../../commons/dtos/response.dto';
import { Pagination } from '../../../commons/models/pagination.model';

import { SpecieRepository } from '../../domain/repository/specie.repository';
import { Specie } from '../../domain/entities/specie.entity';
import { GetAllDto } from '../dtos/get-all.dto';
import { getAllDtoToSpecieListMapper } from '../mappers/get-all-dto-to-specie-list.mapper';

export class SpeciesAdapter extends SpecieRepository {
  constructor(public http: HttpBase) {
    super();
  }

  getAll(page: number = 1, search = ''): Promise<Pagination<Specie>> {
    return this.http.get<ResponseDto<GetAllDto>>(ApiUrls.species, { params: { page, search }})
      .then(response => new Pagination<Specie>(
        page,
        response.next,
        getAllDtoToSpecieListMapper(response.results),
        response.count,
      ));
  }

  getById(id: number): Promise<Specie> {
    return this.http.get<GetAllDto>(`${ApiUrls.species}/${id}`)
      .then(response => getAllDtoToSpecieListMapper([response])[0]);
  }
}