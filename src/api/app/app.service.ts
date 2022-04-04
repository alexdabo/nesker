import { Injectable } from '@nestjs/common';
const pkg = require('../../../package.json');

@Injectable()
export class AppService {
  getInfo(): Object {
    return {
      name: pkg.name,
      author: pkg.author,
      version: pkg.version,
      description: pkg.description,
      envornment: { database: process.env.DATABASE_TYPE },
    };
  }
}
