import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { Logger } from '@nestjs/common';
import { UserSeeder } from './user/user.seed';

export class MainSeeder implements Seeder {
  constructor(private readonly logger: Logger = new Logger(MainSeeder.name)) {}

  async run(dataSource: DataSource): Promise<void> {
    await runSeeder(dataSource, UserSeeder); // Populate Admin user default

    this.logger.log('Seeds run seeds run successfully');
  }
}
