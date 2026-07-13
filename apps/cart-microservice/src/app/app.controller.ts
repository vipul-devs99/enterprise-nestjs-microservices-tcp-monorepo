import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessagePatterns, Cart } from '@nestjs-microservices/shared';

@Controller()
export class AppController {
  @MessagePattern(MessagePatterns.GET_CART)
  getCart(): Cart {
    return {
      userId: 'johndoe',
      items: [
        { productId: '2', quantity: 1, name: 'Headphones', price: 199.99 },
        { productId: '3', quantity: 2, name: 'Keyboard', price: 79.99 }
      ],
      totalPrice: 359.97
    };
  }
}

