import { OrderInterface } from './order.interface';
import { ApiProperty } from '@nestjs/swagger';

export class Order implements OrderInterface {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  productId: number;
}
