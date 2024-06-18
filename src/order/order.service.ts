import { OrderInterface } from './order.interface';
import { Injectable } from '@nestjs/common';
import prisma from '../main';

@Injectable()
export class OrderService {
  private readonly orders: OrderInterface[] = [];

  async create(productId: number, targetEmail: string) {
    const user = await prisma.user.findFirst({
      where: {
        email: targetEmail,
      },
    });
    return prisma.order.create({
      data: {
        userId: user.id,
        products: {
          connect: { id: productId },
        },
      },
    });
  }

  findAll() {
    return prisma.order.findMany();
  }

  findByUserId(targetId: number) {
    return prisma.order.findMany({
      where: {
        userId: targetId,
      },
    });
  }

  delete(targetId: number) {
    prisma.order.delete({
      where: {
        id: targetId,
      },
    });
  }
}
