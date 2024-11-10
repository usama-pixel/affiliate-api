import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogPost } from './blog-posts.entity'
import { IEdit } from './interfaces/blog-post.interface';
import { CreateBlogPostDto } from './dtos/create-blog-post.dto';

@Injectable()
export class BlogPostsService {
  constructor(@InjectRepository(BlogPost) private repo: Repository<BlogPost>) {}
  
  getBlogPosts(query: any) {
    if (Object.keys(query).length === 0) {
      return this.repo.find()
    }
    const filters = {};
    for (const [key, value] of Object.entries(query)) {
      if (value === 'true' || value === 'false') { // Handle boolean values
        filters[key] = value === 'true'
        continue;
      }
      if (!isNaN(Number(value))) { // Handle numeric values
        filters[key] = Number(value)
      }
      filters[key] = value // Handle string values
    }
    return this.repo.find({
      where: filters
    })
  }

  async createBlogPost(createBlogDto: CreateBlogPostDto) {
    const blogPost = this.repo.create({...createBlogDto})
    this.repo.save(blogPost)
    return blogPost
  }
  async editBlogPost(id: number, body: IEdit) {
    let blogPost = await this.repo.findOne({ where: { id } })
    if (!blogPost) {
      throw new NotFoundException('Blog post not found')
    }
    blogPost = {...blogPost, ...body}
    return this.repo.save(blogPost)
  }
  async deleteBlogPost(id: number) {
    const blogPost = await this.repo.findOne({ where: { id } })
    console.log({blogPost})
    if (!blogPost) {
      throw new NotFoundException('Blog post not found')
    }
    blogPost.deletedAt = new Date()
    this.repo.save(blogPost)
    return "Deleted Successfully"
  }
}
