import { Specie } from '../../domain/entities/specie.entity';
import { GetAllDto } from '../dtos/get-all.dto';

export const getAllDtoToSpecieListMapper = (getAllDto: GetAllDto[]): Specie[] => getAllDto.map((dto) => ({
  id: Number(dto.url.split('/')[5]),
  name: dto.name,
  averageHeight: dto.average_height,
  language: dto.language,
}));