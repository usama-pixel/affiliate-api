import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class BlogPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  writtenBy: string; // will be foreign key in future
  
  @Column({
    default: false
  })
  isPublished: boolean;
}

