import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
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
  getBlogs(@Query() query: any) {
    return this.blogPostsService.getBlogPosts(query)
  }
 
  @Get('count')
  getPostCount() {
    return this.blogPostsService.getPostCount()
  }

  @Get(':id')
  getBlog(@Param('id', PositiveIntPipe) id: number) {
    return this.blogPostsService.getBlogPost(id)
  }
  
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createBlogPost(@Body() createBlogPost: CreateBlogPostDto) {
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
