import { FlyBehaviour } from './FlyBehaviour';

export class FlyNoWay implements FlyBehaviour {
  public fly() {
    console.log(`I can't fly`);
  }
}
