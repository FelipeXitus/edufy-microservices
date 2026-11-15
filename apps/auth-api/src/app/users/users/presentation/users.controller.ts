import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from '../application/users.service';
import { SignupUserDto } from './dto/signup-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('createUser')
  create(@Payload() signupUserDto: SignupUserDto) {
    return this.usersService.create(signupUserDto);
  }
}
