import { Injectable } from '@nestjs/common';

import { PizzaStore, PizzaFactory } from './simple-factory';

@Injectable()
export class FactoryService {
  constructor() {
    const factory = new PizzaFactory();

    const pizzaStore = new PizzaStore(factory);

    pizzaStore.orderPizza('veggie');
  }
}
