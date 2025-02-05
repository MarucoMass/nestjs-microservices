import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true, // Hace que esté disponible en toda la app
    }),
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, {
      authSource: 'admin', // Necesario para autenticación
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD,
      autoCreate: true
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
