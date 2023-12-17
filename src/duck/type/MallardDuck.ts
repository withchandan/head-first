import { Duck } from '../Duck';

import { FlyWithWings, Quack } from '../Behaviour';

export class MallardDuck extends Duck {
  constructor() {
    super();

    this.flyBehaiour = new FlyWithWings();
    this.quackBehaviour = new Quack();
  }

  public display() {
    console.log('I am a real Mallard Duck');
  }
}
