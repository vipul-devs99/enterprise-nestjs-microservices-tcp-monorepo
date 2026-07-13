import { Module } from '@nestjs/common';
import { Services, TcpClientModule } from '@nestjs-microservices/shared';
import { ProductsController } from './controllers/products.controller';
import { ProductsClient } from './clients/products.client';

@Module({
  imports: [TcpClientModule.register(Services.PRODUCTS)],
  controllers: [ProductsController],
  providers: [ProductsClient],
  exports: [ProductsClient],
})
export class ProductsModule {}
