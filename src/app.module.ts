import { Module } from '@nestjs/common';
import { CustomConfigModule } from './config/config.module';
import { DatabaseModule } from './database';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [CustomConfigModule, DatabaseModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
