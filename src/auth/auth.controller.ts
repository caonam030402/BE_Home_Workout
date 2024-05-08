import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signInDto';
import { SignUpDto } from './dto/signUpDto';
import { SignInWithGoogleDto } from './dto/signInWithGoogleDto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('/signin')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('/signin/oauth2')
  signInOAuth2(@Body() signinWithOAuth2: SignInWithGoogleDto) {
    return this.authService.signInWithOauth2(signinWithOAuth2);
  }
}
