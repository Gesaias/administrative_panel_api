import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AirportService } from './airport.service';
import { AlterStatusAirportDto } from './dto/alter-status-airport.dto';

@Controller('airport')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Get()
  async findAll() {
    return await this.airportService.findAll();
  }

  @Post('alter_status/:id/:newStatus')
  @HttpCode(HttpStatus.OK)
  async alterStatus(
    @Param('id') id: string,
    @Param('newStatus') newStatus: string,
    @Body() body: AlterStatusAirportDto,
  ) {
    return this.airportService.alterStatus(Number(id), Number(newStatus), body);
  }
}
