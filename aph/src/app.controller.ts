import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly aphService: AppService) {}

  @EventPattern('get_products')
  async handleGetProducts(data: any) {
    const res = await this.aphService.getProducts(data);
    return res;
  }
}
