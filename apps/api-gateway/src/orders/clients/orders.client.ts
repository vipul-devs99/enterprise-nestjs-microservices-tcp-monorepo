import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Services, MessagePatterns, Order } from '@nestjs-microservices/shared';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrdersClient {
  constructor(
    @Inject(Services.ORDERS) private readonly client: ClientProxy
  ) {}

  getOrders(): Promise<Order[]> {
    return firstValueFrom(
      this.client.send<Order[], any>(MessagePatterns.GET_ORDERS, {})
    );
  }
}
