import { NestFactory } from '@nestjs/core';
import { AphModule } from './aph.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AphModule,
    {
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222 '],
      },
    },
  );
  await app.listen();
}
bootstrap();
