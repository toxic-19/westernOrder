// import { PartialType } from '@nestjs/mapped-types';
// import { CreateSeatDto } from './create-seat.dto';

import { IsNotEmpty } from 'class-validator';

// export class UpdateSeatDto extends PartialType<CreateSeatDto> {}
export class UpdateSeatDto {
  @IsNotEmpty()
  readonly id: number;
  readonly tableName: string;
  readonly capacity: number;
}
