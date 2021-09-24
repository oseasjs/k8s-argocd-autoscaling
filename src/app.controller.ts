import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/high-cpu')
  highCpu(@Query('iteractions') iteractions: number = 1) {
    return this.appService.execHighCpu(iteractions);
  }

  @Get('/high-memory')
  highMemory(@Query('iteractions') iteractions: number = 1,
    @Query('total-users') totalUsers: number = 100) {
    return this.appService.execHighMemory(iteractions, totalUsers);
  }
  
}
