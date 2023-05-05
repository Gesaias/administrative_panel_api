import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { USERS_REPOSITORY } from 'src/utils/providers';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const data: User = await this.usersRepository.create({
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    });

    const createdUser: User = await this.usersRepository.save(data);

    return { ...createdUser, password: undefined };
  }

  async findByUsername(username: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { username } });
  }
}
