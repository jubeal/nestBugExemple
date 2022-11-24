import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessage(message: string): string {
    return `You really want me to say that: ${message} ?`;
  }
}
