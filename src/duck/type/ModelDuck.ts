import { Duck } from '../Duck';

import { FlyNoWay, Quack } from '../Behaviour';

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehaiour = new FlyNoWay();
    this.quackBehaviour = new Quack();
  }

  public display() {
    console.log('I am a model duck');
  }
}
