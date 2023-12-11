import { HttpBase } from '@swfalcon/swdata';

import { ApiUrls } from '../../../commons/constants/api';
import { ResponseDto } from '../../../commons/dtos/response.dto';
import { Pagination } from '../../../commons/models/pagination.model';

import { PeopleRepository } from '../../domain/repository/people.repository';
import { People } from '../../domain/entities/people.entity';
import { GetAllDto } from '../dtos/get-all.dto';
import { getAllDtoToPeopleListMapper } from '../mappers/get-all-dto-to-people-list.mapper';

export class PeopleAdapter extends PeopleRepository {
  constructor(public http: HttpBase) {
    super();
  }

  getAll(page: number = 1, search = ''): Promise<Pagination<People>> {
    return this.http.get<ResponseDto<GetAllDto>>(ApiUrls.people, { params: { page, search } })
      .then(response => new Pagination<People>(
        page,
        response.next,
        getAllDtoToPeopleListMapper(response.results),
        response.count,
      ));
  }

  getById(id: number): Promise<People> {
    return this.http.get<GetAllDto>(`${ApiUrls.people}/${id}`)
      .then(response => getAllDtoToPeopleListMapper([response])[0]);
  }
}