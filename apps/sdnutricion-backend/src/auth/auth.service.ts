import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@app/services/user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.getRepo().findOne({
      relations: ['nutriologo', 'nutriologo.suscripciones', 'nutriologo.establecimiento', 'nutriologo.calendario', 'paciente'],
      where: {
        email: email,
      }
    });
    if (!user) return null;
    const result = await bcrypt.compare(pass, user.password);
    if (user && result == true) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { ...user };
    return {
      token: this.jwtService.sign(payload),
      user,
    };
  }
}
