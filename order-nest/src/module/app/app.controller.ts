/**
 * 带有单个路由的基本控制器
 * 负责处理传入的请求并将响应的内容返回给客户端
 */
import { Controller, Get, HttpStatus, Inject, Res } from '@nestjs/common';
import { AppService } from './app.service';
// import { ResponseInterceptor } from '../../interface/response.interceptor';
import { Response } from 'express';
import { myResponse } from 'src/common/response';

@Controller('/')
// @UseInterceptors(ResponseInterceptor)
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('My_Response') private readonly myResponse,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/res')
  tryToRes(@Res() res: Response): any {
    return res.status(HttpStatus.OK).json({
      data: 'res',
      code: HttpStatus.OK,
    });
  }

  @Get('/myRes')
  tryMyRes(@Res() res: Response): any {
    return myResponse(res, HttpStatus.OK, 'myRes', '操作成功');
  }
}
