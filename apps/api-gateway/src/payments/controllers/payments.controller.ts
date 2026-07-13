import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Payment } from '@nestjs-microservices/shared';
import { PaymentsClient } from '../clients/payments.client';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsClient: PaymentsClient) {}

  @Get()
  @ApiOperation({ summary: 'Get payment details' })
  @ApiResponse({ status: 200, description: 'Payments successfully retrieved.', type: [Payment] })
  getPayments(): Promise<Payment[]> {
    return this.paymentsClient.getPayments();
  }
}
