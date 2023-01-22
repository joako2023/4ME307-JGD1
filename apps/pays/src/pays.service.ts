import { Injectable } from '@nestjs/common';

@Injectable()
export class PaysService {
  getHello(): string {
    return 'Hello World!';
  }
}
