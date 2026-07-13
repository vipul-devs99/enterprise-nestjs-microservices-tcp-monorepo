import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Services, MICROSERVICE_CONFIG } from '@nestjs-microservices/shared';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const config = MICROSERVICE_CONFIG[Services.ORDERS];
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: config.host,
        port: config.port,
      },
    }
  );

  await app.listen();

  Logger.log(`🚀 Orders microservice is listening on port ${config.port}`);
}


bootstrap();
