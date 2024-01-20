import { WeaponBehaviour } from './Behaviour';

export abstract class Game {
  weaponBehaviour: WeaponBehaviour;

  public performAction() {
    this.weaponBehaviour.useWeapon();
  }

  public setWeapon(wb: WeaponBehaviour) {
    this.weaponBehaviour = wb;
  }
}
