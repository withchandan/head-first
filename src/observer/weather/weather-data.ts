import { SubjectInterface } from './subject.interface';
import { ObserverInterface } from './observers';

export class WeatherData implements SubjectInterface {
  private readonly observers: ObserverInterface[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
  }

  addObserver(obs: ObserverInterface): void {
    this.observers.push(obs);
  }

  removeObserver(obs: ObserverInterface): void {
    //
  }

  notifyObservers(): void {
    this.observers.forEach((ele) => {
      ele.update();
    });
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }

  getTemperature(): number {
    return this.temperature;
  }

  getHumidity(): number {
    return this.humidity;
  }

  getPressure(): number {
    return this.pressure;
  }
}
