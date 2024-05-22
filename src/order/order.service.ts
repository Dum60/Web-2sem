import { OrderInterface } from './oreder.interface';
import { ProductInterface } from '../product/product.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  private readonly orders: OrderInterface[] = [];

  create(products: OrderInterface) {}

  findAll(): OrderInterface[] {
    return this.orders;
  }

  findByUserId(id: string) {}

  delete(id: string) {}
}
