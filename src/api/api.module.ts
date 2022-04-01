import { TaskModule } from './task/task.module';
import { AppModule } from './app/app.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AppModule, TaskModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
