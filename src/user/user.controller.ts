import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post() create(@Body() user: User) {
    return this.userService.createUser(user);
  }
}
