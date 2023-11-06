import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @ApiQuery({ name: 'city', required: true, type: String })
  @ApiResponse({
    status: 200,
    description: 'Weather data retrieved successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async getWeather(@Query('city') city: string) {
    if (!city) {
      throw new HttpException('City is required', HttpStatus.BAD_REQUEST);
    }

    try {
      const weatherData = await this.weatherService.getWeather(city);
      return weatherData;
    } catch (error) {
      // In a real-world app, you'd want to do better error handling
      console.log(error.message);
      throw new HttpException(
        'Failed to get weather data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
