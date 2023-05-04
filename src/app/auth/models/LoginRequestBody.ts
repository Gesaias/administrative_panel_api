import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { User } from 'src/app/user/entities/user.entity';

export class LoginRequestBody extends User {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;
}
