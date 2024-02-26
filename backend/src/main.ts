import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true, // Optionally, to throw errors for non-whitelisted properties
    transform: true, // Automatically transform payloads to DTO instances
  }));
  await app.listen(3000);
}
bootstrap();
