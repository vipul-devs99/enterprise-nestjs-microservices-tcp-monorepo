import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Order } from '@nestjs-microservices/shared';
import { OrdersClient } from '../clients/orders.client';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersClient: OrdersClient) {}

  @Get()
  @ApiOperation({ summary: 'Get orders' })
  @ApiResponse({ status: 200, description: 'Orders successfully retrieved.', type: [Order] })
  getOrders(): Promise<Order[]> {
    return this.ordersClient.getOrders();
  }
}
