/**
 * 具有单一方法的基本服务 service 即写method的文件
 */
import { Injectable } from '@nestjs/common';

@Injectable() // 在应用程序中实现依赖注入
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
