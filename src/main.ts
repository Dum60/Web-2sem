import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './config/configuration';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

const hbs = require('hbs');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setViewEngine('hbs');

  app.setBaseViewsDir(join(__dirname, '..', 'public', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'public', 'views', 'partials'));
  await app.listen(configuration().port);
}
bootstrap();
