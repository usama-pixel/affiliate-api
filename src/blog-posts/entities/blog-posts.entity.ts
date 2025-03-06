import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('blog_posts')
export class BlogPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    nullable: true
  })
  image_url: string
  
  @Column()
  content: string;

  @Column()
  written_by: string; // will be foreign key in future
  
  @Column({
    default: false
  })
  is_published: boolean;

  @Column({
    default: false
  })
  featured: boolean;

  @Column({
    default: false
  })
  is_main_post: boolean;

  @Column({
    default: 0
  })
  view_count: number

  @Column({
    default: false
  })
  is_popular: boolean
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'timestamp', default: null })
  deletedAt: Date
}