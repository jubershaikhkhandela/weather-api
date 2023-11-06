
## Weather API

A RESTful API to retrieve the current weather information for a specified city, built with NestJS. It utilizes the WeatherAPI.com service for fetching weather data.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 10.13.0 or above).

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/jubershaikhkhandela/weather-api.git
   ```
2. Enter the project directory:
   ```sh
   cd weather-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Environment Configuration

Create a `.env` file in the project root with your API key from WeatherAPI.com:
```plaintext
WEATHER_API_KEY=your_api_key_here
```

## Running the API Locally

Launch the development server:
```sh
npm run start:dev
```
The API will be available at `http://localhost:3000`.

## API Endpoints

### Get Current Weather

- **URL**: `/weather`
- **Method**: `GET`
- **URL Params**: `city=[string]`
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: `{ weather: ... }`

## Swagger Documentation

Access the auto-generated Swagger documentation at `http://localhost:3000/api`.

## Building for Production

To build the application for production, use the build script:
```sh
npm run build
```

## Contributing

Contributions to improve the project are welcome. Please adhere to this project's `code of conduct`.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Questions?

For any questions or concerns, reach out to me at `zubairnuc@gmail.com.com`.

---

Project initiated by [Juber Shaikh](https://github.com/jubershaikhkhandela).
