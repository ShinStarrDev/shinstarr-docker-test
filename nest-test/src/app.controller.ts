import { Body, Controller, Get, Logger, Post } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  private logger = new Logger('AppController')
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('more')
  getMore(): string {
    return this.appService.getMore()
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.debug(`DATA: ${data}`)
    this.logger.debug(`DATA TYPE: ${typeof data}`)
    this.logger.debug('Adding ' + data.toString())
    return this.appService.accumulate(data)
  }

  @Post('minus')
  async accumulate2(@Body('data') data: number[]) {
    this.logger.debug(`DATA: ${data}`)
    this.logger.debug(`DATA TYPE: ${typeof data}`)
    this.logger.debug('minus ' + data.toString())
    return this.appService.accumulate2(data)
  }
}
