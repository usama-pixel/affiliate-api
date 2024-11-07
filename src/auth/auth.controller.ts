import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() signUpDto: any) {
    // const data = await this.authService.signup(signUpDto)
    // console.log(data)
    return {
      statusCode: 201,
      // data
    }
  }
}
