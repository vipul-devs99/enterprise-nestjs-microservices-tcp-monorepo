import { Module } from '@nestjs/common';
import { Services, TcpClientModule } from '@nestjs-microservices/shared';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TcpClientModule.register(Services.AUTH)],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

