import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dtos/signup.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    saltOrRounds = 10;
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>,
        private readonly jwtService: JwtService
    ) {}
    async login({email, password}): Promise<any> {
        const user = await this.userRepo.findOne({ where: { email } })
        if (!user) {
            throw new NotFoundException('User with email not found');
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw new BadRequestException('Incorrect email or password')
        }
        return {
            access_token: this.jwtService.sign({ id: user.id, email: user.email }),
            user,
            message: 'Login Successful'
        }
    }

    async signup({ email, password } : SignUpDto): Promise<any> {
        const user = await this.userRepo.findOne({ where: { email } })
        if (user) {
            throw new ConflictException('User with same email already exists');
        }
        const hash = await bcrypt.hash(password, this.saltOrRounds)
        const newUser = this.userRepo.create({ email, password: hash })
        await this.userRepo.save(newUser);
        return {
            access_token: this.jwtService.sign({ id: newUser.id, email: newUser.email }),
            user: newUser,
            message: 'Signup Successful'
        }
    }
}
