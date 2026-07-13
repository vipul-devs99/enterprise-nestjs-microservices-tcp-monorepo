import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Services, MessagePatterns, Notification } from '@nestjs-microservices/shared';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class NotificationsClient {
  constructor(
    @Inject(Services.NOTIFICATIONS) private readonly client: ClientProxy
  ) {}

  sendNotification(userId: string, message: string): Promise<Notification> {
    return firstValueFrom(
      this.client.send<Notification, any>(MessagePatterns.SEND_NOTIFICATION, { userId, message })
    );
  }
}
