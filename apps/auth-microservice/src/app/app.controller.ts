import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { CreateUserDto, MessagePatterns } from '@nestjs-microservices/shared';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(MessagePatterns.GET_USER)
  handleGetUser(user: CreateUserDto) {
    return this.appService.getUser(user.username);
  }

  @MessagePattern(MessagePatterns.CREATE_USER)
  handleCreateUser(newUser: CreateUserDto) {
    return this.appService.createUser(newUser);
  }
}

