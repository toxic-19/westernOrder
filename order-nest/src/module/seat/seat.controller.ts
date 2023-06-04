import { Controller, Get, Param } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatEntity } from '../../entities/Seat.entity';
@Controller('/seat')
export class SeatController {
  constructor(private seatService: SeatService) {}

  @Get('/list')
  getTableList(): Promise<SeatEntity[]> {
    return this.seatService.getTableList();
  }

  @Get()
  getTable(): string {
    return this.seatService.try();
  }

  @Get('/:id')
  getSeatByAreaId(@Param() params): Promise<SeatEntity> {
    const id: number = parseInt(params.id);
    console.log('/:id', id);
    return this.seatService.getSeatByAreaId(id);
  }
}
