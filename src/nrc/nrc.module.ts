import { Module } from '@nestjs/common';
import { NrcService } from './nrc.service';
import { NrcController } from './nrc.controller';

@Module({
  controllers: [NrcController],
  providers: [NrcService]
})
export class NrcModule {}
