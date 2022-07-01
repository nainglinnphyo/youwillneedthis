import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NrcController } from './nrc/nrc.controller';
import { NrcService } from './nrc/nrc.service';
import { NRCSchema } from './nrc/schema/nrc.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://root:root@cluster0.smczzvo.mongodb.net/?retryWrites=true&w=majority',{dbName: 'youwillneedthis'}),
  MongooseModule.forFeature([{ name: 'Nrc', schema: NRCSchema }])],
  controllers: [AppController,NrcController],
  providers: [AppService,NrcService],
})
export class AppModule {}
