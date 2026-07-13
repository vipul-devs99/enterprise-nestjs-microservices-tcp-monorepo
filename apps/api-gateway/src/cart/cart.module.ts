import { Module } from '@nestjs/common';
import { Services, TcpClientModule } from '@nestjs-microservices/shared';
import { CartController } from './controllers/cart.controller';
import { CartClient } from './clients/cart.client';

@Module({
  imports: [TcpClientModule.register(Services.CART)],
  controllers: [CartController],
  providers: [CartClient],
  exports: [CartClient],
})
export class CartModule {}
