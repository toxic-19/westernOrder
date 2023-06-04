/**
 * T应用程序的根模块 root module
 */
import { Module } from '@nestjs/common';
import { AppController } from './module/app/app.controller';
import { AppService } from './module/app/app.service';
import { SeatModule } from './module/seat/seat.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'order',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
      synchronize: true, // 定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用)
    }),
    SeatModule,
  ],
  controllers: [AppController],
  /**
   * 在使用Injectable时 需要将该类添加到模块的providers数组中
   * 以便Angular能够实例化该服务，并在应用程序的组件中使用它
   */
  providers: [AppService],
})
export class AppModule {}
