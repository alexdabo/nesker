import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): Object {
    return {
      name: process.env.APP_NAME,
      version: process.env.APP_VERSION,
      description: process.env.APP_DESCRIPTION,
    };
  }
}
