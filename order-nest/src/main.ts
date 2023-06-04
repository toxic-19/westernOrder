/**
 * 程序的入口文件 使用核心函数 NestFactory来创建next应用程序的实例
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // create方法返回一个应用程序的对象
  await app.listen(3000); // 仅启动了 HTTP 侦听器
}
bootstrap();
