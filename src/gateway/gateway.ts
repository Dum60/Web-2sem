import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import prisma from '../main';

@WebSocketGateway()
export class Gateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit(): any {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('connected');
    });
  }

  @SubscribeMessage('updatePrice')
  async updatePrice(msg: any, body: any) {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(body[0]),
      },
    });
    this.server.emit('priceUpdated', {
      body: `${product.name}, price changed to ${body[1]}`,
    });
  }
}
