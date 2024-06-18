import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { ProductController } from './product/product.controller';
import { UserController } from './user/user.controller';
import { OrderService } from './order/order.service';
import { ProductService } from './product/product.service';
import { UserService } from './user/user.service';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [GatewayModule],
  controllers: [
    AppController,
    OrderController,
    ProductController,
    UserController,
  ],
  providers: [AppService, OrderService, ProductService, UserService],
})
export class AppModule {}
