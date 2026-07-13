import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Services, MessagePatterns, Product } from '@nestjs-microservices/shared';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductsClient {
  constructor(
    @Inject(Services.PRODUCTS) private readonly client: ClientProxy
  ) {}

  getProducts(): Promise<Product[]> {
    return firstValueFrom(
      this.client.send<Product[], any>(MessagePatterns.GET_PRODUCTS, {})
    );
  }
}
