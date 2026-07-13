import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessagePatterns, Order } from '@nestjs-microservices/shared';

@Controller()
export class AppController {
  @MessagePattern(MessagePatterns.GET_ORDERS)
  getOrders(): Order[] {
    return [
      { id: '1001', userId: 'johndoe', items: [{ productId: '1', quantity: 1 }], total: 999.99, status: 'Shipped' },
      { id: '1002', userId: 'janedoe', items: [{ productId: '2', quantity: 2 }], total: 399.98, status: 'Pending' }
    ];
  }
}
