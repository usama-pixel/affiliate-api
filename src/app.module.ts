import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogPostsModule } from './blog-posts/blog-posts.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOptions } from '../datasource';
@Module({
  imports: [
    AuthModule,
    BlogPostsModule,
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      autoLoadEntities: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
