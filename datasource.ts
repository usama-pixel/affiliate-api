import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './src/auth/entities/user.entity';
import { BlogPost } from './src/blog-posts/entities/blog-posts.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'affiliate',
  entities: [User, BlogPost],
  migrations: ['src/migrations/*.js'],
  synchronize: false, // Set to false for migrations
};

export const AppDataSource = new DataSource(dataSourceOptions);