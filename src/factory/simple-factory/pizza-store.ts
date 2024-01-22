import { PizzaFactory } from './pizza-factory';

export class PizzaStore {
  private readonly factory: PizzaFactory;

  constructor(factory: PizzaFactory) {
    this.factory = factory;
  }

  public orderPizza(type: string): void {
    const pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }
}
