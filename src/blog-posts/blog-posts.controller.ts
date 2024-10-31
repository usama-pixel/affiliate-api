import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BlogPostsService } from './blog-posts.service';
import { IEdit } from './interfaces/blog-post.interface';

@Controller('blog-posts')
export class BlogPostsController {
  constructor(
    private readonly blogPostsService: BlogPostsService,
  ) {}
  
  @Get()
  getBlogs() {
    return this.blogPostsService.getBlogPosts()
  }

  @Post()
  createBlogPost(@Body('title') title: string, @Body('content') content: string, @Body('writtenBy') writtenBy: string) {
    return this.blogPostsService.createBlogPost(title, content, writtenBy);
  }

  @Patch(':id')
  editBlogPost(@Param('id') id: number, @Body() body: IEdit) {
    return this.blogPostsService.editBlogPost(id, body);
  }
}
