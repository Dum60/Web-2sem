import { ProductInterface } from './product.interface';
import { Injectable } from '@nestjs/common';
import prisma from '../main';
import { Gateway } from '../gateway/gateway';

@Injectable()
export class ProductService {
  private readonly products: ProductInterface[] = [];

  findAll() {
    return prisma.product.findMany();
  }

  create(product: ProductInterface) {
    return prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        size: product.size,
        description: product.description,
      },
    });
  }

  async update(targetId: number, newPrice: number) {
    return prisma.product.update({
      where: {
        id: Number(targetId),
      },
      data: {
        price: Number(newPrice),
      },
    });
  }

  delete(targetId: number) {
    prisma.product.delete({ where: { id: targetId } });
  }

  findById(targetId: number) {
    return prisma.product.findUnique({
      where: {
        id: Number(targetId),
      },
    });
  }
}
