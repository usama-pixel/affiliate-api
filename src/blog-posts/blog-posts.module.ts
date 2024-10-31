import { Module } from '@nestjs/common';
import { BlogPostsService } from './blog-posts.service';
import { BlogPostsController } from './blog-posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { BlogPost } from './blog-posts.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    BlogPost
  ])],
  controllers: [BlogPostsController],
  providers: [BlogPostsService],
})
export class BlogPostsModule {}
