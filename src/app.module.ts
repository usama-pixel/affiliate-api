import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogPostsModule } from './blog-posts/blog-posts.module';
import { TypeOrmModule } fom '@nestjs/typeorm'
@Module({
  imports: [
    AuthModule,
    BlogPostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'locahost',
      port: 5432,
      username: 'root',
      database: 'affiliate',
      entities: [],
      synchronize: false
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
