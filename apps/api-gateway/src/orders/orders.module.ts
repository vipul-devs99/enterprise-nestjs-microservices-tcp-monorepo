import { Module } from '@nestjs/common';
import { Services, TcpClientModule } from '@nestjs-microservices/shared';
import { OrdersController } from './controllers/orders.controller';
import { OrdersClient } from './clients/orders.client';

@Module({
  imports: [TcpClientModule.register(Services.ORDERS)],
  controllers: [OrdersController],
  providers: [OrdersClient],
  exports: [OrdersClient],
})
export class OrdersModule {}
