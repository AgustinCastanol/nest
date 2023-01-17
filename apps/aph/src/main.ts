import { NestFactory } from '@nestjs/core';
import { AphModule } from './aph.module';

async function bootstrap() {
  const app = await NestFactory.create(AphModule);
  await app.listen(3000);
}
bootstrap();
