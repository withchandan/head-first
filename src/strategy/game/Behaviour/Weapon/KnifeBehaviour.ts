import { WeaponBehaviour } from './WeaponBehaviour';

export class KnifeBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log('Cutting with knife');
  }
}
