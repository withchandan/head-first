import { Injectable } from '@nestjs/common';

import { MallardDuck } from './type/MallardDuck';

@Injectable()
export class DuckService {
  constructor() {
    const duck = new MallardDuck();

    duck.display();
    duck.performFly();
    duck.performQuack();
  }
}
