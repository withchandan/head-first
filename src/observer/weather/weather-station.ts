import { WeatherData } from './weather-data';
import { CurrentCondition, WeatherStats, Forecast } from './observers';

export class WeatherStation {
  private readonly weatherData: WeatherData;
  private readonly currentCondition: CurrentCondition;
  private readonly weatherStats: WeatherStats;
  private readonly forecast: Forecast;

  constructor() {
    this.weatherData = new WeatherData();

    this.currentCondition = new CurrentCondition(this.weatherData);
    // this.weatherStats = new WeatherStats(this.weatherData);
    // this.forecast = new Forecast(this.weatherData);

    this.weatherData.setMeasurements(80, 65, 30);

    setTimeout(() => {
      this.weatherData.setMeasurements(82, 70, 29);
    }, 2000);
    setTimeout(() => {
      this.weatherData.setMeasurements(78, 90, 24);
    }, 4000);
  }
}
