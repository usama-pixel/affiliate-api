import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BlogPostsService } from './blog-posts.service';
import { IEdit } from './interfaces/blog-post.interface';
import { CreateBlogPostDto } from './dtos/create-blog-post.dto';

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
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createBlogPost(@Body() createBlogPost: CreateBlogPostDto) {
    console.log({ createBlogPost })
    return this.blogPostsService.createBlogPost(createBlogPost);
  }

  @Patch(':id')
  editBlogPost(@Param('id') id: number, @Body() body: IEdit) {
    return this.blogPostsService.editBlogPost(id, body);
  }
}
