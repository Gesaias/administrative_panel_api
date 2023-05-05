import { Logger, Module } from '@nestjs/common';
import { WebServiceService } from './web_service.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [WebServiceService, Logger],
  exports: [WebServiceService],
})
export class WebServiceModule {}
