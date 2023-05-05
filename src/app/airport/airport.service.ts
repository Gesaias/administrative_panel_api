import { Injectable } from '@nestjs/common';
import httpConfig from 'src/config/http.config';
import { WebServiceService } from '../web_service/web_service.service';
import { AlterStatusAirportDto } from './dto/alter-status-airport.dto';

@Injectable()
export class AirportService {
  constructor(private readonly webService: WebServiceService) {}

  async findAll() {
    try {
      const airports = await this.webService.requestGet(
        `${httpConfig().urlWebService}/airports`,
      );

      return airports;
    } catch (error) {
      return error;
    }
  }

  async alterStatus(
    id: number,
    newStatus: number,
    dto: AlterStatusAirportDto,
  ): Promise<any> {
    try {
      const status = await this.webService.requestPost(
        `${
          httpConfig().urlWebService
        }/airports/alter_status/${id}/${newStatus}`,
        dto,
      );

      return { status: status };
    } catch (error) {
      return error;
    }
  }
}
