import { Starship } from '../../domain/entities/starship.entity';
import { GetAllDto } from '../dtos/get-all.dto';

export const getAllDtoToStarshipListMapper = (getAllDto: GetAllDto[]): Starship[] => getAllDto.map((dto) => ({
  id: Number(dto.url.split('/')[5]),
  name: dto.name,
  model: dto.model,
  manufacturer: dto.manufacturer,
  cost: dto.cost_in_credits,
  length: dto.length,
  speed: dto.max_atmosphering_speed,
  passengers: dto.passengers,
  starshipClass: dto.starship_class,
}));