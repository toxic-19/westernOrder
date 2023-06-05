import { Controller, Get, Param } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatEntity } from '../../entities/Seat.entity';

@Controller('/seat')
export class SeatController {
  constructor(private seatService: SeatService) {}

  /**
   * 获取餐桌列表
   * @returns [{}]
   */
  @Get('/list')
  getTableList(): Promise<SeatEntity[]> {
    return this.seatService.getTableList();
  }
  /**
   * 根据区域id查询餐桌列表
   * @returns [{}]
   * @param area_id
   */
  @Get('/:area_id')
  getSeatByAreaId(@Param('area_id') area_id): Promise<SeatEntity[]> {
    // @Param() params
    // const id: number = parseInt(params.id);
    // console.log('/:area_id', params.area_id);
    // return this.seatService.getSeatByAreaId(params.area_id);
    return this.seatService.getSeatByAreaId(area_id);
  }
}
