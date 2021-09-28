import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/high-cpu/:size')
  highCpu(@Param('size', ParseIntPipe) size: number) {
    return this.appService.highCpu(size);
  }

  @Get('/high-memory/:size')
  highMemory(@Param('size', ParseIntPipe) size: number) {
    return this.appService.highMemory(size);
  }
  
}
