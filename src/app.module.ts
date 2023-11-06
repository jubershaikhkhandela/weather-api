import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    WeatherModule,
    ConfigModule.forRoot({
      isGlobal: true, // This will make ConfigModule global
      envFilePath: '.env',
    }),
  ],
})
export class AppModule {}
