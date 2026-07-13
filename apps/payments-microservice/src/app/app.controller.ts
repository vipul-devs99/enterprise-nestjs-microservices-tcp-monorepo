import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessagePatterns, Payment } from '@nestjs-microservices/shared';

@Controller()
export class AppController {
  @MessagePattern(MessagePatterns.GET_PAYMENTS)
  getPayments(): Payment[] {
    return [
      { id: 'pay_001', orderId: '1001', amount: 999.99, method: 'Credit Card', status: 'Success' },
      { id: 'pay_002', orderId: '1002', amount: 399.98, method: 'PayPal', status: 'Pending' }
    ];
  }
}

