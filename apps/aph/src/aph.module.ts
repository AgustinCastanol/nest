import { Module } from '@nestjs/common';
import { AphController } from './aph.controller';
import { AphService } from './aph.service';

@Module({
  imports: [],
  controllers: [AphController],
  providers: [AphService],
})
export class AphModule {}
