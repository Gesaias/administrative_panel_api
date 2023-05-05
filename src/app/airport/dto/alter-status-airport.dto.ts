import { IsString } from 'class-validator';

export class AlterStatusAirportDto {
  @IsString()
  description: string;
}
