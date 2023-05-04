import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('token')
  @HttpCode(HttpStatus.OK)
  verifyToken() {
    return;
  }
}
