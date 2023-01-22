import { Injectable } from '@nestjs/common';

@Injectable()
export class CronsService {
  getHello(): string {
    return 'Hello World!';
  }
}
