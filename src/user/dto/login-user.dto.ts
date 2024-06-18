import { UserInterface } from '../user.interface';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto implements UserInterface {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
