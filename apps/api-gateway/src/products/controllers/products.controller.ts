import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Product } from '@nestjs-microservices/shared';
import { ProductsClient } from '../clients/products.client';
import { ProductsThrottlerGuard } from '../guards/products-throttler.guard';

@ApiTags('products')
@Controller('products')
@UseGuards(ProductsThrottlerGuard)
export class ProductsController {
  constructor(private readonly productsClient: ProductsClient) {}

  @Get()
  @ApiOperation({ summary: 'Get products' })
  @ApiResponse({ status: 200, description: 'Products successfully retrieved.', type: [Product] })
  getProducts(): Promise<Product[]> {
    return this.productsClient.getProducts();
  }
}
