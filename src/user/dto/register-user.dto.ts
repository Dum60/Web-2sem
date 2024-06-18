import { UserInterface } from '../user.interface';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto implements UserInterface {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
