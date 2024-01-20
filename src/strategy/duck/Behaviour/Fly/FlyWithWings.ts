import { FlyBehaviour } from './FlyBehaviour';

export class FlyWithWings implements FlyBehaviour {
  public fly() {
    console.log('I am flying');
  }
}
