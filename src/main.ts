import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DeletedAtInterceptor } from './blog-posts/interceptors/deleted-at.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new DeletedAtInterceptor())
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
