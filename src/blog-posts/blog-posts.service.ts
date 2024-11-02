import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogPost } from './blog-posts.entity'
import { IEdit } from './interfaces/blog-post.interface';
import { CreateBlogPostDto } from './dtos/create-blog-post.dto';

@Injectable()
export class BlogPostsService {
  constructor(@InjectRepository(BlogPost) private repo: Repository<BlogPost>) {}
  
  getBlogPosts() {
    return this.repo.find()
  }

  async createBlogPost({title, content, writtenBy}: CreateBlogPostDto) {
    const blogPost = this.repo.create({
      content,
      writtenBy,
      title,
    })
    this.repo.save(blogPost)
    return blogPost
  }
  async editBlogPost(id: number, body: IEdit) {
    let blogPost = await this.repo.findOne({ where: { id } })
    if (!blogPost) {
      throw new Error('Blog post not found')
    }
    blogPost = {...blogPost, ...body}
    return this.repo.save(blogPost)
  }
}
