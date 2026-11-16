import { Module } from "@nestjs/common";
import { UsersService } from "./application/users.service";
import { UsersController } from "./presentation/users.controller";
import { ConfiguredJwtModule } from "src/libs/jwt/jwt.module";

@Module({
  imports: [ConfiguredJwtModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
