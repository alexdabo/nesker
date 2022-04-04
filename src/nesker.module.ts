import { DatabaseModule } from './configs/database.module';
import { StaticModule } from './configs/static.module';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, StaticModule, ApiModule],
  controllers: [],
  providers: [],
})
export class NeskerModule {}
