import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/user/user.module';
import { DatabaseModule } from './database/database.module';
import { JwtAuthGuard } from './app/auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
