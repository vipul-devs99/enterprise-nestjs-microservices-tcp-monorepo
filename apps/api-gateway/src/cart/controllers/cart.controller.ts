import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Cart } from '@nestjs-microservices/shared';
import { CartClient } from '../clients/cart.client';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartClient: CartClient) {}

  @Get()
  @ApiOperation({ summary: 'Get cart' })
  @ApiResponse({ status: 200, description: 'Cart successfully retrieved.', type: Cart })
  getCart(): Promise<Cart> {
    return this.cartClient.getCart();
  }
}
