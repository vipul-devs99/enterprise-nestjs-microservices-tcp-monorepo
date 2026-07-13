import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { CreateUserDto, User, Services, MessagePatterns } from '@nestjs-microservices/shared';

@Injectable()
export class AuthService {
  constructor(
    @Inject(Services.AUTH) private readonly authClient: ClientProxy
  ) {}

  getUser(createUserDto: CreateUserDto) {
    return this.authClient.send<User, CreateUserDto>(MessagePatterns.GET_USER, createUserDto);
  }

  createUser(createUserDto: CreateUserDto) {
    return this.authClient.send<User, CreateUserDto>(MessagePatterns.CREATE_USER, createUserDto);
  }
}

