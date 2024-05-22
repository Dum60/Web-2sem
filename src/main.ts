import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './config/configuration';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';

const hbs = require('hbs');

const prisma = new PrismaClient();

export default prisma;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setViewEngine('hbs');

  const config = new DocumentBuilder()
    .setTitle('Linderfull')
    .addTag('User', 'Operations about user')
    .addTag('Order', 'Access to orders')
    .addTag('Product', 'Everything about orders')
    .addTag('Frontend', 'Render pages')
    .setDescription('Custom clothes store based on OpenAPI 3.0 specification')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.setBaseViewsDir(join(__dirname, '..', 'public', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'public', 'views', 'partials'));
  await app.listen(configuration().port);
}
bootstrap();
