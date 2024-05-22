import { Injectable } from '@nestjs/common';
import { UserInterface } from './user.interface';

@Injectable()
export class UserService {
  private readonly users: UserInterface[] = [];

  register(user: UserInterface) {}

  login(user: UserInterface) {}

  findAll(): UserInterface[] {
    return this.users;
  }

  logout() {}

  delete(username: string) {}

  update(user: UserInterface) {}
}
