import { Injectable } from '@nestjs/common';

import { ModelDuck } from './type';

import { FlyRocketPowered } from './Behaviour';

@Injectable()
export class DuckService {
  constructor() {
    const duck = new ModelDuck();

    duck.performFly();

    duck.setFlyBehaviour(new FlyRocketPowered());

    duck.performQuack();
    duck.performFly();
  }
}
