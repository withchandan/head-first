import { BowAndArrowBehaviour } from '../Behaviour';

import { Game } from '../game';

export class Troll extends Game {
  constructor() {
    super();
    this.weaponBehaviour = new BowAndArrowBehaviour();
  }

  public fight() {
    this.performAction();
  }
}
