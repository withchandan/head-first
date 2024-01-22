import { Pizza } from './pizza.interface';

export class ClamPizza implements Pizza {
  private readonly pizza = 'Clam pizza';

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
