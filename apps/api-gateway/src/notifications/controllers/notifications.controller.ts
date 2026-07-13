import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { Notification } from '@nestjs-microservices/shared';
import { NotificationsClient } from '../clients/notifications.client';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsClient: NotificationsClient) {}

  @Post()
  @ApiOperation({ summary: 'Send a notification' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        userId: { type: 'string', example: 'johndoe' },
        message: { type: 'string', example: 'Your order #1001 has been shipped!' },
      },
      required: ['userId', 'message'],
    },
  })
  @ApiResponse({ status: 201, description: 'Notification successfully processed.', type: Notification })
  sendNotification(
    @Body() body: { userId: string; message: string }
  ): Promise<Notification> {
    return this.notificationsClient.sendNotification(body.userId, body.message);
  }
}
