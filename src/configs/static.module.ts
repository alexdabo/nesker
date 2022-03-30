import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client'),
    }),
  ],
})
export class StaticModule {}
