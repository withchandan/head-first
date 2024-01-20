import { WeaponBehaviour } from './WeaponBehaviour';

export class AxeBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log('Chopping with an axe');
  }
}
