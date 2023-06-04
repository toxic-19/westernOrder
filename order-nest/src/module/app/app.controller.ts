/**
 * 带有单个路由的基本控制器
 * 负责处理传入的请求并将响应的内容返回给客户端
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
