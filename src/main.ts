import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Advanced backend')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .addTag('Adv BC')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
}

start();
