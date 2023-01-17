import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  // eslint-disable-next-line @typescript-eslint/ban-types
  async newLogin(@Body() body: any): Promise<Object> {
    const res = await this.appService.login(body);
    return { data: res };
  }
}
