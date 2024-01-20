import { ObserverInterface } from './observers';

export interface SubjectInterface {
  addObserver(obs: ObserverInterface): void;
  removeObserver(obs: ObserverInterface): void;
  notifyObservers(): void;
}
