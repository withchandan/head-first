import { Injectable } from '@nestjs/common';

import { DuckCall } from './type';

@Injectable()
export class DuckService {
  constructor() {
    const duck = new DuckCall();

    duck.performQuack();
  }
}
