import { Injectable } from '@nestjs/common';

import { King } from './Charaters';
import { KnifeBehaviour } from './Behaviour';

@Injectable()
export class GameService {
  constructor() {
    const character = new King();

    character.fight();

    character.setWeapon(new KnifeBehaviour());

    character.fight();
  }
}
