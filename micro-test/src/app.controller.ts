import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController')
  constructor(private readonly appService: AppService) {}

  @MessagePattern('add')
  async accumulate(data: number[]) {
    this.logger.debug(`DATA: ${data}`);
    this.logger.debug(`DATA TYPE: ${typeof data}`);
    this.logger.debug('Adding ' + data.toString());
    return this.appService.accumulate(data);
  }
}
