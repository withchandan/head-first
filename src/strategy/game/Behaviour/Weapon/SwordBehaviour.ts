import { WeaponBehaviour } from './WeaponBehaviour';

export class SwordBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log('Swinging a sword');
  }
}
