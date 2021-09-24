import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World ! INSTANCE: ' + process.pid;
  }

  execHighCpu(iteractions: number) {
    let step = 0;
    for (; step < iteractions; step++);
    return {'total': step};
  }

  async execHighMemory(iteractions: number, totalUsers: number): Promise<any> {

    let list = [];
    let size = 0;

    for (let step = 0; step < iteractions; step++) {
      
      try {
        await axios.get('https://randomuser.me/api/?results=' + totalUsers)
          .then(users => {
            list.push(users.data);
            size += users.data.results.length;
          })
          .catch(error => {
            console.log(error.response.data.error);
            throw error;
          });
        }
        catch(e) {
          list.push(e.message);
          size ++;
        }

    }

    return {
      "size": size,
      "data: ": list
    };
  }
}
