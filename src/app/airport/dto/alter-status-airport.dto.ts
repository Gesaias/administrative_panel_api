import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AlterStatusAirportDto {
  @ApiProperty({ example: 'Under maintenance', description: 'Description for inactive airport' })
  @IsString()
  description: string;
}
