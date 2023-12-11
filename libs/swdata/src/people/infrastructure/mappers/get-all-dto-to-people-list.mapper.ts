import { People } from '../../domain/entities/people.entity';
import { GetAllDto } from '../dtos/get-all.dto';

export const getAllDtoToPeopleListMapper = (getAllDto: GetAllDto[]): People[] => getAllDto.map((dto) => ({
  id: Number(dto.url.split('/')[5]),
  name: dto.name,
  eyeColor: dto.eye_color,
  hairColor: dto.hair_color,
  height: dto.height,
  gender: dto.gender,
  skinColor: dto.skin_color,
}));