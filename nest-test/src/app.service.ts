import { Injectable, Logger } from '@nestjs/common'
import {
  ClientProxy,
  ClientProxyFactory,
  Transport
} from '@nestjs/microservices'

@Injectable()
export class AppService {
  private client1: ClientProxy
  private client2: ClientProxy
  private logger = new Logger('Main Nest AppService')
  constructor(
  ) {
    this.client1 = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: 'micro-test', port: 8877 }
    })
    this.client2 = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: 'micro-test2', port: 8876 }
    })
  }
  getHello(): string {
    return 'Hello World!!'
  }

  getMore(): string {
    return 'GET MORE!'
  }

  accumulate(data: number[]) {
    this.logger.debug(`data check ${data}`)
    return this.client1.send<number, number[]>('add', data)
  }

  accumulate2(data: number[]) {
    return this.client2.send<number, number[]>('minus', data)
  }
}
