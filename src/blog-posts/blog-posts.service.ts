import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogPost } from './blog-posts.entity.ts'

@Injectable()
export class BlogPostsService {
  constructor(@InjectRepository(BlogPost) private blogPost: Repository<BlogPost>) {}
}
