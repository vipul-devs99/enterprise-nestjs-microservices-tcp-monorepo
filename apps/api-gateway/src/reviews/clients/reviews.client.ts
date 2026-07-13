import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Services, MessagePatterns, Review } from '@nestjs-microservices/shared';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ReviewsClient {
  constructor(
    @Inject(Services.REVIEWS) private readonly client: ClientProxy
  ) {}

  getReviews(): Promise<Review[]> {
    return firstValueFrom(
      this.client.send<Review[], any>(MessagePatterns.GET_REVIEWS, {})
    );
  }
}
