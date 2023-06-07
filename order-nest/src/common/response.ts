import { Response } from 'express';
import { HttpStatus } from '@nestjs/common';

export function myResponse(
  res: Response,
  code: HttpStatus,
  data: any,
  message: string,
) {
  return res.status(code).json({
    data,
    message,
    code,
  });
}
