import { Controller, Get } from '@nestjs/common';
import { AphService } from './aph.service';

@Controller()
export class AphController {
  constructor(private readonly aphService: AphService) {}

  @Get()
  getHello(): string {
    return this.aphService.getHello();
  }
}
