import { Injectable, Inject } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @Inject(UsersService) private UsersService: UsersService,
    @Inject(JwtService) private JwtService: JwtService,
  ) {}

  async validateUser(user: string, pass: string, email: string) {
    const res = await this.UsersService.findOne(email);
    if (res === null || res === undefined) {
      return { error: 'User not found' };
    }
    const match = await bcrypt.compare(pass, res.password);
    if (!match) {
      return { error: 'User not found' };
    }
    const payload = {
      email: res.email,
      roles: res.roles.map((role) => role.name),
    };
    const token = await this.JwtService.sign(payload);
    return { token, roles: payload.roles };
  }
}
