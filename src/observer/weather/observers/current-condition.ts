import { ObserverInterface } from './observer.interface';
import { DisplayInterface } from './display.interface';

import { WeatherData } from '../weather-data';

export class CurrentCondition implements ObserverInterface, DisplayInterface {
  private readonly weatherData: WeatherData;
  private temperature: number;
  private humidity: number;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.addObserver(this);
  }

  update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();

    this.display();
  }

  display(): void {
    console.log(
      `Display current condition => Temp: ${this.temperature}, Humidity: ${this.humidity}`,
    );
  }
}
