import { NeskerModule } from './nesker.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(NeskerModule);
  await app.listen(process.env.PORT || 3000).then(data=>{
    console.log(data)
  });
}
bootstrap();
