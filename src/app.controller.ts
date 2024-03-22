import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseTimeInterceptor } from './interceptors/responseTimeInterceptor';

@Controller()
@UseInterceptors(ResponseTimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {}
}
