import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World ! INSTANCE: ' + process.pid;
  }

  execHighCpu(iteractions: number) {
    
    // let value = this.fibonacci(iteractions);
    // return {
    //   "value": value
    // }

    let step = 0;
    for (; step < iteractions; step++);
    return {'total': step};

  }

  async execHighMemory(iteractions: number, totalUsers: number): Promise<any> {

    let list = [];
    let size = 0;

    await axios.get('https://randomuser.me/api/?results=1')
      .then(users => {
        for (let step = 0; step < (iteractions * totalUsers); step++) {
          list.push(users.data);
          size += users.data.results.length;
        }
      })
      .catch(e => {
        console.log(e.response.data.error);
        throw e;
      });

    return {
      "size": size,
      "data: ": list
    };
    
  }

  private fibonacci = (num) => {
    if (num <= 1) return 1;
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }
}
