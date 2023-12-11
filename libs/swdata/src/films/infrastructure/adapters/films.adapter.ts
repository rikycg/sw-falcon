import { HttpBase } from '@swfalcon/swdata';

import { ApiUrls } from '../../../commons/constants/api';
import { ResponseDto } from '../../../commons/dtos/response.dto';
import { Pagination } from '../../../commons/models/pagination.model';

import { FilmRepository } from '../../domain/repository/film.repository';
import { Film } from '../../domain/entities/film.entity';
import { GetFilmDto } from '../dtos/get-film.dto';
import { getFilmDtoToFilmMapper } from '../mappers/get-film-dto-to-film.mapper';

export class FilmsAdapter extends FilmRepository {
  constructor(public http: HttpBase) {
    super();
  }

  getAll(page: number = 1, search?: string): Promise<Pagination<Film>> {
    return this.http.get<ResponseDto<GetFilmDto>>(ApiUrls.films, { params: { page, search }})
      .then(response => new Pagination<Film>(
        page,
        response.next,
        getFilmDtoToFilmMapper(response.results),
        response.count,
      ));
  }

  getById(id: number): Promise<Film> {
    return this.http.get<GetFilmDto>(`${ApiUrls.films}/${id}`)
      .then(response => getFilmDtoToFilmMapper([response])[0]);
  }
}