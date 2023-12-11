import { Planet } from '../../domain/entities/planet.entity';
import { GetAllDto } from '../dtos/get-all.dto';

export const getAllDtoToPlanetListMapper = (getAllDto: GetAllDto[]): Planet[] => getAllDto.map((dto) => ({
  id: Number(dto.url.split('/')[5]),
  name: dto.name,
  diameter: dto.diameter,
  climate: dto.climate,
  terrain: dto.terrain,
  population: dto.population,
}));