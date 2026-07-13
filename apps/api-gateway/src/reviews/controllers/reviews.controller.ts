import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Review } from '@nestjs-microservices/shared';
import { ReviewsClient } from '../clients/reviews.client';

@ApiTags('reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsClient: ReviewsClient) {}

  @Get()
  @ApiOperation({ summary: 'Get product reviews' })
  @ApiResponse({ status: 200, description: 'Product reviews successfully retrieved.', type: [Review] })
  getReviews(): Promise<Review[]> {
    return this.reviewsClient.getReviews();
  }
}
