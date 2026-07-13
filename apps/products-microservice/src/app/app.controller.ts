import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessagePatterns, Product } from '@nestjs-microservices/shared';

@Controller()
export class AppController {
  @MessagePattern(MessagePatterns.GET_PRODUCTS)
  getProducts(): Product[] {
    return [
      { id: '1', name: 'Laptop', price: 999.99, description: 'High-end developer laptop' },
      { id: '2', name: 'Headphones', price: 199.99, description: 'Noise-cancelling headphones' },
      { id: '3', name: 'Keyboard', price: 79.99, description: 'Mechanical keyboard' }
    ];
  }
}

