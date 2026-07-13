import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessagePatterns, Review } from '@nestjs-microservices/shared';

@Controller()
export class AppController {
  @MessagePattern(MessagePatterns.GET_REVIEWS)
  getReviews(): Review[] {
    return [
      { id: 'rev_1', productId: '1', userId: 'johndoe', rating: 5, comment: 'Excellent developer laptop! Super fast.' },
      { id: 'rev_2', productId: '2', userId: 'janedoe', rating: 4, comment: 'Sound quality is great, noise cancellation works well.' },
      { id: 'rev_3', productId: '1', userId: 'alice', rating: 5, comment: 'Love the screen brightness and keyboard.' }
    ];
  }
}
