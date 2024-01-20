import { AxeBehaviour } from '../Behaviour';

import { Game } from '../game';

export class Knight extends Game {
  constructor() {
    super();
    this.weaponBehaviour = new AxeBehaviour();
  }

  public fight() {
    this.performAction();
  }
}
