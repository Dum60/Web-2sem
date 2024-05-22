import { CustomInterface } from './custom.interface';

export class CustomService {
  private readonly customs: CustomInterface[] = [];

  create() {}

  findAll(): CustomInterface[] {
    return this.customs;
  }

  findByUserId(id: string) {}

  delete(id: string) {}
}
