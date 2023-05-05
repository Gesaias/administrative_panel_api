import { Logger, Module } from '@nestjs/common';
import { AirportService } from './airport.service';
import { AirportController } from './airport.controller';
import { WebServiceModule } from '../web_service/web_service.module';

@Module({
  imports: [WebServiceModule],
  controllers: [AirportController],
  providers: [AirportService, Logger],
})
export class AirportModule {}
