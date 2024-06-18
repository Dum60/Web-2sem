import { Injectable } from '@nestjs/common';
import { UserInterface } from './user.interface';
import prisma from '../main';
import { User } from './user';
import { RuntimeException } from '@nestjs/core/errors/exceptions';

@Injectable()
export class UserService {
  private readonly users: UserInterface[] = [];

  register(user: UserInterface) {
    return prisma.user.create({
      data: {
        email: user.email,
        password: user.password,
      },
    });
  }

  async login(user: UserInterface) {
    const DBUser = await prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });
    if (user.password != DBUser.password) {
      throw RuntimeException;
    }
  }

  async findAll() {
    return prisma.user.findMany();
  }

  logout() {}

  delete(email: string) {
    prisma.user.delete({
      where: {
        email: email,
      },
    });
  }
}
