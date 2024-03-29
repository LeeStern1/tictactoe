import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  
  app.listen('5000', () => {
    console.log(`Server listening on 5000`);
  });
  
}
bootstrap();
