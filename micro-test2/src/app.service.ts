import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  accumulate2(data: number[]): number {
    return (data || []).reduce((a, b) => Number(a) - Number(b))
  }
}