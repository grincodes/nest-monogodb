import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/demo'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
