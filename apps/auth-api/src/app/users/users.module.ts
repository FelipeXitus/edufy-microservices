import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UsersService } from './application/users.service';
import { UserRepository } from './domain/user.repository';
import { KyselyUserRepository } from './infrastructure/kysely.user.repository';
import { JwtGuard } from './presentation/jwt.guard';
import { UsersController } from './presentation/users.controller';
import { ConfiguredJwtModule } from '../../libs/jwt/jwt.module';

@Module({
  imports: [ConfiguredJwtModule],
  controllers: [UsersController],
  providers: [
    {
      provide: UserRepository,
      useClass: KyselyUserRepository,
    },
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    UsersService,
  ],
})
export class UsersModule {}
