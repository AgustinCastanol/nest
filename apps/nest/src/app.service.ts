import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('LOGIN_SERVICE') private clienteLogin: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  async login(user: any) {
    const res = await this.clienteLogin.send('new_login', user).toPromise();
    return res;
  }
}
