import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseTimeInterceptor } from './interceptors/responseTimeInterceptor';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Frontend')
@UseInterceptors(ResponseTimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {}

  @Get('delivery')
  @Render('delivery')
  delivery() {}

  @Get('about')
  @Render('about')
  about() {}

  @Get('gallery')
  @Render('gallery')
  gallery() {}

  @Get('posts')
  @Render('posts')
  posts() {}
}
