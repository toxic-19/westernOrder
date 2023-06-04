import { Module } from '@nestjs/common';
import { SeatController } from './seat.controller';
import { SeatService } from './seat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatEntity } from '../../entities/Seat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeatEntity])], // 导入并注册实体
  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
