import { Injectable, Inject } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LoginService {
  constructor(@Inject(AuthService) private authService: AuthService) {}

  async login(data: any) {
    const res = await this.authService.validateUser(
      data.user,
      data.pass,
      data.email,
    );
    console.log('respuesta', res);
    return res;
  }
}
