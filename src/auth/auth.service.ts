import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dtos/signup.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>,
        // private readonly jwtService: JwtService
    ) {}

    async signup({ email, password } : SignUpDto): Promise<any> {
        const user = await this.userRepo.findOne({ where: { email } })
        if (user) {
            throw new ConflictException('User with same id already exists');
        }
        const newUser = this.userRepo.create({ email, password })
        await this.userRepo.save(newUser);
        return {
            // access_token: this.jwtService.sign({ id: newUser.id, email: newUser.email }),
            newUser
        }
    }
}
