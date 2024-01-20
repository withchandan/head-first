import { WeaponBehaviour } from './WeaponBehaviour';

export class BowAndArrowBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log('Shooting an arrow with bow');
  }
}
