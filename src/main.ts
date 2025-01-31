import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  const logger = new Logger('Application');
  logger.verbose(`Server is running on ${process.env.PORT}`);

  app.enableCors({
    origin: '*',
  });

  await app.listen(process.env.PORT);
}

bootstrap();
