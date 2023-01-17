import { Injectable } from '@nestjs/common';

@Injectable()
export class AphService {
  getHello(): string {
    return 'Hello World!';
  }
}
