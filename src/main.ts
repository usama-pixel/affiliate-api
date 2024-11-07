import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DeletedAtInterceptor } from './blog-posts/interceptors/deleted-at.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new DeletedAtInterceptor())
  app.useGlobalPipes(new ValidationPipe({whitelist: true}));
  app.enableCors()
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
