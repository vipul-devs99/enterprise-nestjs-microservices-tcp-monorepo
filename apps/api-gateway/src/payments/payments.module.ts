import { Module } from '@nestjs/common';
import { Services, TcpClientModule } from '@nestjs-microservices/shared';
import { PaymentsController } from './controllers/payments.controller';
import { PaymentsClient } from './clients/payments.client';

@Module({
  imports: [TcpClientModule.register(Services.PAYMENTS)],
  controllers: [PaymentsController],
  providers: [PaymentsClient],
  exports: [PaymentsClient],
})
export class PaymentsModule {}
