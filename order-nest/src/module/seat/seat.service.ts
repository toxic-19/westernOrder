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
  async getTableList(): Promise<SeatEntity[]> {
    console.log(__dirname);
    return await this.seatRepository.find();
    // return await this.seatRepository.query('select * from seat');
  }

  async getSeatByAreaId(areaId: number): Promise<SeatEntity> {
    console.log('areaId', areaId);
    return await this.seatRepository.query(
      `select * from seat where area_id = ${areaId}`,
    );
  }

  try(): string {
    return 'table';
  }
}
