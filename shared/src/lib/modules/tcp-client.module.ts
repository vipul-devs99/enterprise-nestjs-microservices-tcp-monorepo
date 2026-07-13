import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Services } from '../constants/microservices.constants';
import { MICROSERVICE_CONFIG } from '../config/microservices.config';

@Module({})
export class TcpClientModule {
  static register(serviceName: Services): DynamicModule {
    const config = MICROSERVICE_CONFIG[serviceName];
    if (!config) {
      throw new Error(`Configuration not found for service: ${serviceName}`);
    }

    return {
      module: TcpClientModule,
      imports: [
        ClientsModule.register([
          {
            name: serviceName,
            transport: Transport.TCP,
            options: {
              host: config.host,
              port: config.port,
            },
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
