import { Injectable } from '@nestjs/common';
import { SignupUserDto } from '../presentation/dto/signup-user.dto';

@Injectable()
export class UsersService {
  create(signupUserDto: SignupUserDto) {
    return 'This action adds a new user';
  }
}
