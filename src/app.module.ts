import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { ProductController } from './product/product.controller';
import { CustomController } from './custom/custom.controller';
import { UserController } from './user/user.controller';
import { CustomService } from './custom/custom.service';
import { OrderService } from './order/order.service';
import { ProductService } from './product/product.service';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    OrderController,
    ProductController,
    CustomController,
    UserController,
  ],
  providers: [
    AppService,
    CustomService,
    OrderService,
    ProductService,
    UserService,
  ],
})
export class AppModule {}
