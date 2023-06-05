import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSeatDto {
  // 新增餐桌必须字段：areaId areaName tableName capacity
  @IsNotEmpty()
  @IsNumber()
  readonly areaId: number;

  @IsNotEmpty()
  @IsString()
  readonly areaName: string;

  @IsNotEmpty()
  @IsString()
  readonly tableName: string;

  @IsNotEmpty()
  @IsNumber()
  readonly capacity: number;
}
