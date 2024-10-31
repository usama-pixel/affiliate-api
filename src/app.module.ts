import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogPostsModule } from './blog-posts/blog-posts.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { BlogPost } from './blog-posts/blog-posts.entity';
@Module({
  imports: [
    AuthModule,
    BlogPostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'affiliate',
      entities: [BlogPost],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
