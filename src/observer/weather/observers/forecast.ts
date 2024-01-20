import { ObserverInterface } from './observer.interface';
import { DisplayInterface } from './display.interface';

import { WeatherData } from '../weather-data';

export class Forecast implements ObserverInterface, DisplayInterface {
  private readonly weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.addObserver(this);
  }

  update(): void {
    this.display();
  }

  display(): void {
    console.log('Display forecast');
  }
}
