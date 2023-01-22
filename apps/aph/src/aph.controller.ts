import { Controller } from '@nestjs/common';
import { AphService } from './aph.service';
import { EventPattern } from '@nestjs/microservices';
@Controller()
export class AphController {
  constructor(private readonly aphService: AphService) {}

  @EventPattern('get_products')
  async handleGetProducts(data: any) {
    const res = await this.aphService.getProducts(data);
    return res;
  }
}
