import { QuackBehaviour, Quack } from '../Behaviour';

export class DuckCall {
  quackBehaviour: QuackBehaviour;

  constructor() {
    this.quackBehaviour = new Quack();
  }

  public performQuack() {
    this.quackBehaviour.quack();
  }
}
