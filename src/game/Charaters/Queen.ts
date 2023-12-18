import { KnifeBehaviour } from '../Behaviour';

import { Game } from '../game';

export class Queen extends Game {
  constructor() {
    super();
    this.weaponBehaviour = new KnifeBehaviour();
  }

  public fight() {
    this.performAction();
  }
}
