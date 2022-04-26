import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'

const logger = new Logger('Main')

const microservicOptions = {
  transport: Transport.TCP,
  options: {
    host: 'micro-test2',
    port: 8876
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microservicOptions)
  await app.listen()
}
bootstrap();
