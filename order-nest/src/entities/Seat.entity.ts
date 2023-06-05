import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('seat', { schema: 'order' }) // @Entity表示这是一个实体类
export class SeatEntity {
  @Column('bigint', { name: 'area_id', nullable: true, comment: '区域id' })
  areaId: string | null;

  @Column('varchar', {
    name: 'area_name',
    nullable: true,
    comment: '区域名称',
    length: 32,
  })
  areaName: string | null;

  @Column('varchar', {
    name: 'table_name',
    nullable: true,
    comment: '餐桌名称',
    length: 32,
  })
  tableName: string | null;

  @Column('tinyint', {
    name: 'status',
    nullable: true,
    comment: '1进行中0空闲',
    width: 1,
    default: () => "'0'",
  })
  status: boolean | null;

  @Column('bigint', {
    name: 'capacity',
    nullable: true,
    comment: '餐桌可容纳人数',
  })
  capacity: string | null;

  @Column('bigint', {
    name: 'amount',
    nullable: true,
    comment: '餐桌实际使用人数',
  })
  amount: string | null;

  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('datetime', {
    name: 'create_time',
    nullable: true,
    comment: '创建时间',
  })
  createTime: Date | null;

  @Column('datetime', {
    name: 'update_time',
    nullable: true,
    comment: '更新新时间',
  })
  updateTime: Date | null;

  @Column('int', { name: 'update_by', nullable: true, comment: '更新者id' })
  updateBy: number | null;

  @Column('int', { name: 'create_by', nullable: true, comment: '创建者id' })
  createBy: number | null;

  @Column('tinyint', {
    name: 'is_delete',
    nullable: true,
    comment: '1删除0有效',
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean | null;
}
