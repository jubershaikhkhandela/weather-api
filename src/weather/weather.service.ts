import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WeatherService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async getWeather(city: string): Promise<any> {
    const apiKey = this.configService.get<string>('WEATHER_API_KEY');
    console.log(process.env); // To log all environment variables
    console.log(this.configService.get('WEATHER_API_KEY')); // To log the specific variable

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
      city,
    )}`;

    try {
      const response = await this.httpService.get(url).toPromise();
      return response.data;
    } catch (error) {
      // Here you should handle the error more gracefully in a real-world app
      throw error;
    }
  }
}
