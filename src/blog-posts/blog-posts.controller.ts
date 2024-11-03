import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BlogPostsService } from './blog-posts.service';
import { IEdit } from './interfaces/blog-post.interface';
import { CreateBlogPostDto } from './dtos/create-blog-post.dto';
import { PositiveIntPipe } from './pipes/positive-int.pipe';

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
  editBlogPost(@Param('id', PositiveIntPipe) id: number, @Body() body: IEdit) {
    return this.blogPostsService.editBlogPost(id, body);
  }

  @Delete(':id')
  deleteBlogPost(@Param('id', PositiveIntPipe) id: number) {
    return this.blogPostsService.deleteBlogPost(id)
  }
}
