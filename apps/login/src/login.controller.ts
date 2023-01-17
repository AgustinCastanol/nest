import { Controller } from '@nestjs/common';
import { LoginService } from './login.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @EventPattern('new_login')
  async handleNewLogin(data: any) {
    const res = await this.loginService.login(data);
    return res;
  }
}
