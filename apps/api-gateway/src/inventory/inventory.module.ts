import { Module } from '@nestjs/common';
import { Services, TcpClientModule } from '@nestjs-microservices/shared';
import { InventoryController } from './controllers/inventory.controller';
import { InventoryClient } from './clients/inventory.client';

@Module({
  imports: [TcpClientModule.register(Services.INVENTORY)],
  controllers: [InventoryController],
  providers: [InventoryClient],
  exports: [InventoryClient],
})
export class InventoryModule {}
