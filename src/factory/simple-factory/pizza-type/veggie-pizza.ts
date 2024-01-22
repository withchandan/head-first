import { Pizza } from './pizza.interface';

export class VeggiePizza implements Pizza {
  private readonly pizza = 'Veggie pizza';

  prepare(): void {
    console.log(`${this.pizza} preparing`);
  }

  bake(): void {
    console.log(`${this.pizza} is in oven`);
  }

  cut(): void {
    console.log(`${this.pizza} cutting`);
  }

  box(): void {
    console.log(`${this.pizza} packaging`);
  }
}
