import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {

  private logger = new Logger('AppService');

  getHello(): string {
    return 'Hello World ! INSTANCE: ' + process.pid;
  }

  highCpu(size: number) {
    
    let total = 0;
    for (; total < size; total++);
    this.logger.log(`high-cpu - total: ${total}`);
    return {'instance': process.pid, 'total': total};

  }

  highMemory(size: number) {

    let arr = new Array(size).fill(new Date());
    this.logger.log(`high-memory - total: ${arr.length}`);
    return {'instance': process.pid, 'total': arr.length};
    
  }

}
