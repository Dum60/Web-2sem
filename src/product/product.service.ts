import { ProductInterface } from './product.interface';
import { Injectable } from '@nestjs/common';
import prisma from '../main';

@Injectable()
export class ProductService {
  private readonly products: ProductInterface[] = [];

  findAll(): ProductInterface[] {
    return this.products;
  }

  create(product: ProductInterface) {}

  update(product: ProductInterface) {}

  delete(id: string) {
    prisma.product.delete({ where: { id: Number(id) } });
  }

  findById(id: string) {}
}
