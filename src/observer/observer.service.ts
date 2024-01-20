import { Injectable } from '@nestjs/common';

import { WeatherStation } from './weather/weather-station';

@Injectable()
export class ObserverService {
  constructor() {
    new WeatherStation();
  }
}
