import { SwordBehaviour } from '../Behaviour';

import { Game } from '../game';

export class King extends Game {
  constructor() {
    super();
    this.weaponBehaviour = new SwordBehaviour();
  }

  public fight() {
    this.performAction();
  }
}
