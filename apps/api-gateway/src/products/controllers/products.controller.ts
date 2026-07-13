import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Product } from '@nestjs-microservices/shared';
import { ProductsClient } from '../clients/products.client';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsClient: ProductsClient) {}

  @Get()
  @ApiOperation({ summary: 'Get products' })
  @ApiResponse({ status: 200, description: 'Products successfully retrieved.', type: [Product] })
  getProducts(): Promise<Product[]> {
    return this.productsClient.getProducts();
  }
}
