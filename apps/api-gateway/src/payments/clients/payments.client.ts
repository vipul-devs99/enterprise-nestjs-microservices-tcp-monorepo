import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Services, MessagePatterns, Payment } from '@nestjs-microservices/shared';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PaymentsClient {
  constructor(
    @Inject(Services.PAYMENTS) private readonly client: ClientProxy
  ) {}

  getPayments(): Promise<Payment[]> {
    return firstValueFrom(
      this.client.send<Payment[], any>(MessagePatterns.GET_PAYMENTS, {})
    );
  }
}
