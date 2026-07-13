import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Services, MessagePatterns, Inventory } from '@nestjs-microservices/shared';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class InventoryClient {
  constructor(
    @Inject(Services.INVENTORY) private readonly client: ClientProxy
  ) {}

  getInventory(): Promise<Inventory[]> {
    return firstValueFrom(
      this.client.send<Inventory[], any>(MessagePatterns.GET_INVENTORY, {})
    );
  }
}
