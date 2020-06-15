import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigurationService } from './configuration/configuration.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const configuration = new ConfigurationService(`${process.cwd()}/.env`);

/**
 * To bootstrap the application
 */
async function bootstrap() {

  console.log(configuration.get('ENVIRONMENT'));

  const app = await NestFactory.create(AppModule, {cors : true});
  app.setGlobalPrefix(configuration.get('API_PATH'));
  const options = new DocumentBuilder()
    .setTitle('Room Management API Documentation')
    .setDescription('Room Management API Description')
    .setVersion('1.0.0')
    .setBasePath(configuration.get('API_PATH'))
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(configuration.get('SWAGGER_PATH'), app, document);
  await app.listen(configuration.get('APPLICATION_PORT'));
  return configuration;
}

bootstrap();
