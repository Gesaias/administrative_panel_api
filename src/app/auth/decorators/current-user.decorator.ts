import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from '../models/AuthRequest';
import { User } from 'src/app/user/entities/user.entity';

export const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator =
  createParamDecorator((data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  });
