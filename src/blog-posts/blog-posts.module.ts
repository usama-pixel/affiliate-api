import { Module } from '@nestjs/common';
import { BlogPostsService } from './blog-posts.service';
import { BlogPostsController } from './blog-posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { BlogPost } from './blog-posts.entity.ts'

@Module({
  import: [TypeOrmModule.forFeature([
    BlogPost
  ])],
  controllers: [BlogPostsController],
  providers: [BlogPostsService],
})
export class BlogPostsModule {}
