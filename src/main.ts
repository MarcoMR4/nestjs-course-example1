import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({whitelist: true}));

  app.enableCors() // Definir urls que tienen permitido realizar peticiones a este back

  await app.listen(process.env.PORT || 3000);
}
bootstrap();