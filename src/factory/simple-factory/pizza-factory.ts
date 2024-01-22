import {
  Pizza,
  ClamPizza,
  CheesePizza,
  VeggiePizza,
  PepperoniPizza,
} from './pizza-type';

export class PizzaFactory {
  public createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new CheesePizza();
    }

    if (type === 'clam') {
      return new ClamPizza();
    }

    if (type === 'veggie') {
      return new VeggiePizza();
    }

    if (type === 'pepperoni') {
      return new PepperoniPizza();
    }

    return null;
  }
}
