import { Film } from '../../domain/entities/film.entity';
import { GetFilmDto } from '../dtos/get-film.dto';

export const getFilmDtoToFilmMapper = (getFilmDto: GetFilmDto[]): Film[] => getFilmDto.map((dto) => ({
  id: Number(dto.url.split('/')[5]),
  name: dto.title,
  episodeId: dto.episode_id,
  summary: dto.opening_crawl,
}));