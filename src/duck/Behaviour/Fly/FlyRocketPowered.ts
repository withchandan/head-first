import { FlyBehaviour } from './FlyBehaviour';

export class FlyRocketPowered implements FlyBehaviour {
  public fly() {
    console.log('I am flying with a rocket');
  }
}
