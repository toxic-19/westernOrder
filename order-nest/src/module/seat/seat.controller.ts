import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatEntity } from '../../entities/Seat.entity';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from 'src/module/seat/dto/update-seat.dto';

@Controller('/seat')
export class SeatController {
  constructor(private seatService: SeatService) {}

  /**
   * 获取餐桌列表
   * @returns [{}]
   */
  @Get('/list')
  async getTableList(@Res() res): Promise<any> {
    // return this.seatService.getTableList();
    const list = await this.seatService.getTableList();
    console.log(list);
    return res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: '操作成功',
      data: list,
    });
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

  @Post('/add')
  addSeat(@Body() createSeatDto: CreateSeatDto): Promise<SeatEntity> {
    // TODO 没有参数校验
    console.log('/add', createSeatDto); // { areaId: 2, areaName: 'B区域', tableName: 'B2', capacity: 4 }
    return this.seatService.addSeat(createSeatDto);
  }

  /**
   * 修改餐桌信息
   * @param id
   * @param updateSeatDto
   */
  @Patch('/update/:id')
  updateSeat(
    @Param('id') id: string,
    @Body() updateSeatDto: UpdateSeatDto,
  ): Promise<SeatEntity> {
    console.log('controller', updateSeatDto);
    return this.seatService.updateSeat(id, updateSeatDto);
  }
}
