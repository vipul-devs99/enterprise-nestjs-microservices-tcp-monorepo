import { Module } from '@nestjs/common';
import { Services, TcpClientModule } from '@nestjs-microservices/shared';
import { NotificationsController } from './controllers/notifications.controller';
import { NotificationsClient } from './clients/notifications.client';

@Module({
  imports: [TcpClientModule.register(Services.NOTIFICATIONS)],
  controllers: [NotificationsController],
  providers: [NotificationsClient],
  exports: [NotificationsClient],
})
export class NotificationsModule {}
