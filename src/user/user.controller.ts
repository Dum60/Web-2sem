import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
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
    return this.userService.register(registerUserDto);
  }

  @Get('login')
  @ApiOperation({
    summary: 'Logs user into the system',
  })
  @ApiOkResponse({
    description: 'Logged in',
  })
  async login(@Body() loginUserDto: LoginUserDto) {
    await this.userService.login(loginUserDto);
    return ApiOkResponse;
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
    await this.userService.logout();
    return ApiOkResponse;
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
    await this.userService.delete(username);
    return ApiOkResponse;
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
