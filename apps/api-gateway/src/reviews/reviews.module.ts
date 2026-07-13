import { Module } from '@nestjs/common';
import { Services, TcpClientModule } from '@nestjs-microservices/shared';
import { ReviewsController } from './controllers/reviews.controller';
import { ReviewsClient } from './clients/reviews.client';

@Module({
  imports: [TcpClientModule.register(Services.REVIEWS)],
  controllers: [ReviewsController],
  providers: [ReviewsClient],
  exports: [ReviewsClient],
})
export class ReviewsModule {}
