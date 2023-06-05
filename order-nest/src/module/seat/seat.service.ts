import { Injectable } from '@nestjs/common';
import { SeatEntity } from '../../entities/Seat.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(SeatEntity)
    private readonly seatRepository: Repository<SeatEntity>,
  ) {}
  /**
   * 获取所有餐桌列表
   * @returns
   */
  async getTableList(): Promise<SeatEntity[]> {
    console.log('dirname', __dirname);
    return await this.seatRepository.find({ where: { isDelete: false }});
    // return await this.seatRepository.query('select * from seat');
  }
  /**
   * 根据区域id来获取餐桌列表
   */
  async getSeatByAreaId(areaId): Promise<SeatEntity[]> {
    console.log('areaId', areaId);
    // return await this.seatRepository.query(
    //   `select * from seat where area_id = ${areaId}`,
    // );
    // { where: { firstName: "Timber", lastName: "Saw" } }
    return await this.seatRepository.find({
      where: { areaId: areaId, isDelete: false },
    });
  }

  /**
   * 新增餐桌信息
   * @param seat 餐桌信息对象
   * @returns
   */
  async addSeat(seat): Promise<any> {
    return await this.seatRepository.insert(seat);
  }
}
