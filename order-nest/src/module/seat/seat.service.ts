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
    const list = await this.seatRepository.find({ where: { isDelete: false } });
    // console.log('获取所有餐桌信息', list);
    return list;
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

  /**
   * 修改餐桌信息
   * @param id
   * @param dto
   */
  async updateSeat(id, dto): Promise<any> {
    const seat = await this.seatRepository.find({ where: { id: id } });
    console.log('update', seat);
    if (seat.length === 0) {
      return {
        code: '250',
        msg: '当前餐桌并不存在',
      };
    }
    const result = await this.seatRepository.update(id, {
      tableName: dto.tableName,
      capacity: dto.capacity,
    });
    if (result.affected !== 0) {
      return {
        code: '200',
        msg: '修改餐桌成功',
        data: await this.getTableList(),
      };
    }
  }
}
