import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderInterface } from './oreder.interface';
import { OrderService } from './order.service';
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
import { Order } from './order';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get(':id')
  @ApiOperation({
    summary: 'Find orders by user id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiFoundResponse({
    description: 'Orders found',
    type: [Order],
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async findByUserId(@Param('id') id: string) {
    this.orderService.findByUserId(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create order',
  })
  @ApiCreatedResponse({
    description: 'Order has been successfully created.',
    type: Order,
  })
  @ApiUnauthorizedResponse({ description: 'Register or login' })
  async Create(@Body() order: OrderInterface) {
    this.orderService.create(order);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete order',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({
    description: 'Order deleted',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiUnauthorizedResponse({ description: 'Register or login' })
  async DeleteById(@Param() id: string) {
    this.orderService.delete(id);
  }
}
