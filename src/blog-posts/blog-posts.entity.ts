import { Enitity, Column, PrimaryGenertedColumn } from 'typeorm';

@Entity()
export class BlogPost {
  @PrimaryGenertedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  isPublished: boolean;
}

