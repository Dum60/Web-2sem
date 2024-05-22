import { ProductInterface } from './product.interface';
import { ApiProperty } from '@nestjs/swagger';

export class Product implements ProductInterface {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  size: number;
  @ApiProperty()
  description: string;
}
