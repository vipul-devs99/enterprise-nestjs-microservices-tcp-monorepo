import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Inventory } from '@nestjs-microservices/shared';
import { InventoryClient } from '../clients/inventory.client';

@ApiTags('inventory')
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryClient: InventoryClient) {}

  @Get()
  @ApiOperation({ summary: 'Get inventory stock status' })
  @ApiResponse({ status: 200, description: 'Inventory successfully retrieved.', type: [Inventory] })
  getInventory(): Promise<Inventory[]> {
    return this.inventoryClient.getInventory();
  }
}
