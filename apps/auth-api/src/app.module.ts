import { Module } from '@nestjs/common';
import { UsersModule } from './app/users/users.module';
import { ConfigurationModule } from './libs/configuration/configuration.module';
import { DatabaseModule } from './libs/database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, ConfigurationModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
