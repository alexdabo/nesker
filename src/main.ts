import { NeskerModule } from './nesker.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(NeskerModule);
  await app.listen(3000);
}
bootstrap();
