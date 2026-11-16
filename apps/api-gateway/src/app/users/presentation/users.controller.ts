import { Body, Controller, Post, UseFilters } from "@nestjs/common";
import { UsersService } from "../application/users.service";
import { SignupUserDto } from "./dto/signup-user.dto";
import { Public } from "./public.decorator";
import { RpcToHttpExceptionFilter } from "../../../libs/exception-filters/rpc-to-http.exception-filter";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @UseFilters(new RpcToHttpExceptionFilter())
  @Post("")
  public async createUser(@Body() body: SignupUserDto) {
    return this.usersService.createUser(body);
  }
}
