import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessagePatterns, Inventory } from '@nestjs-microservices/shared';

@Controller()
export class AppController {
  @MessagePattern(MessagePatterns.GET_INVENTORY)
  getInventory(): Inventory[] {
    return [
      { productId: '1', stock: 15, location: 'Warehouse A' },
      { productId: '2', stock: 50, location: 'Warehouse B' },
      { productId: '3', stock: 0, location: 'Warehouse A' }
    ];
  }
}

