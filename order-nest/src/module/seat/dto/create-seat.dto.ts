import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSeatDto {
  // 新增餐桌必须字段：areaId areaName tableName capacity
  @IsNotEmpty()
  @IsNumber()
  readonly areaId: number;

  @IsNotEmpty()
  @IsString()
  readonly areaName: string;

  @IsNotEmpty({ message: '餐桌名称这可不能为空' })
  @IsString({ message: '餐桌名称得是字符串类型哦' })
  readonly tableName: string;

  @IsNotEmpty({ message: '好家伙你得定义可容纳人数啊' })
  @IsNumber()
  readonly capacity: number;
}
