import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRegistrationsService {
  getHello(): string {
    return 'Hello World!';
  }
}
