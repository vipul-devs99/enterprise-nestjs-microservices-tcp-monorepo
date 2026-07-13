import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessagePatterns, Notification } from '@nestjs-microservices/shared';

@Controller()
export class AppController {
  @MessagePattern(MessagePatterns.SEND_NOTIFICATION)
  sendNotification(data: { userId: string; message: string }): Notification {
    return {
      id: Math.random().toString(36).substr(2, 9),
      userId: data.userId,
      type: 'Email',
      message: data.message,
      status: 'Sent',
    };
  }
}
