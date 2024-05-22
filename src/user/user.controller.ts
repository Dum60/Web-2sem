import {
  Body,
  Controller,
  Delete,
  Get,
  Param, Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserInterface } from './user.interface';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from './user';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Create user',
  })
  @ApiCreatedResponse({
    description: 'User has been successfully created',
    type: User,
  })
  async register(@Body() registerUserDto: RegisterUserDto) {
    this.userService.register(registerUserDto);
  }

  @Get('login')
  @ApiOperation({
    summary: 'Logs user into the system',
  })
  @ApiOkResponse({
    description: 'Logged in',
  })
  async login(@Body() loginUserDto: LoginUserDto) {
    this.userService.login(loginUserDto);
  }

  @Get('logout')
  @ApiOperation({
    summary: 'Logs out current logged in user session',
  })
  @ApiOkResponse({
    description: 'Logged out',
  })
  @ApiUnauthorizedResponse({ description: 'Register or login' })
  async logout() {
    this.userService.logout();
  }

  @Patch(':username')
  @ApiOperation({
    summary: 'Update existing user',
  })
  @ApiParam({ name: 'username', type: 'string' })
  @ApiOkResponse({
    description: 'User updated',
  })
  @ApiUnauthorizedResponse({ description: 'Register or login' })
  async update(
    @Param('username') username: string,
    @Body() user: UserInterface,
  ) {
    this.userService.update(user);
  }

  @Delete(':username')
  @ApiOperation({
    summary: 'Delete user',
  })
  @ApiParam({ name: 'username', type: 'string' })
  @ApiOkResponse({
    description: 'User deleted',
  })
  @ApiUnauthorizedResponse({ description: 'Register or login' })
  async delete(@Param('username') username: string) {
    this.userService.delete(username);
  }

  @Get('all')
  @ApiOperation({
    summary: 'Find all users',
  })
  @ApiFoundResponse({
    description: 'All users found',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiUnauthorizedResponse({ description: 'Register or login' })
  async findAll() {
    return this.userService.findAll();
  }
}
