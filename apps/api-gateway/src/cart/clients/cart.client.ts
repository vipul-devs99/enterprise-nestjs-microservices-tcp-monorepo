import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Services, MessagePatterns, Cart } from '@nestjs-microservices/shared';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CartClient {
  constructor(
    @Inject(Services.CART) private readonly client: ClientProxy
  ) {}

  getCart(): Promise<Cart> {
    return firstValueFrom(
      this.client.send<Cart, any>(MessagePatterns.GET_CART, {})
    );
  }
}
