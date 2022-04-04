import { NeskerModule } from './nesker.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(NeskerModule);
  await app.listen(port).then(() => {
    console.log('\x1b[36m\x1b[1mApp listening\x1b[0m');
    console.log(`\x1b[36mPort:\x1b[0m ${port}`);
  });
}
bootstrap();
