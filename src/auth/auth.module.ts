import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // JwtModule.register({
    //   secret: 'jwt',
    //   signOptions: { expiresIn: '1d' }
    // })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
