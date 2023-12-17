import { FlyBehaviour, QuackBehaviour } from './Behaviour';

export abstract class Duck {
  flyBehaiour: FlyBehaviour;
  quackBehaviour: QuackBehaviour;

  public abstract display();

  public setFlyBehaviour(fb: FlyBehaviour) {
    this.flyBehaiour = fb;
  }

  public setQuackBehavior(qb: QuackBehaviour) {
    this.quackBehaviour = qb;
  }

  public performFly() {
    this.flyBehaiour.fly();
  }

  public performQuack() {
    this.quackBehaviour.quack();
  }

  public swim() {
    console.log('All duck float, even decoys');
  }
}
